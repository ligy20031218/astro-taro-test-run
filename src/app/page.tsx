"use client";

import { useState, useRef, useEffect } from "react";
import { getZodiacFromDate, type ZodiacSign } from "@/lib/zodiac";
import { getHoroscope } from "@/lib/horoscope";
import { drawTarot } from "@/lib/tarot";
import { TAROT_SPREADS } from "@/lib/advanced-tarot";
import { SUPPORTED_LANGUAGES, type SupportedLang } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import type { HoroscopeUnit, TarotSession } from "@/lib/types";
import TarotCardComponent from "@/components/TarotCard";

type Horizon = "daily" | "monthly" | "yearly";

export default function HomePage() {
  const [dob, setDob] = useState<string>("");
  const [zodiac, setZodiac] = useState<string | null>(null);
  const [horizon, setHorizon] = useState<Horizon>("daily");
  const [fortune, setFortune] = useState<string>("");
  const [tarot, setTarot] = useState<ReturnType<typeof drawTarot> | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Advanced features state
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [detailedHoroscope, setDetailedHoroscope] = useState<HoroscopeUnit | null>(null);
  const [advancedTarot, setAdvancedTarot] = useState<TarotSession | null>(null);
  const [selectedSpread, setSelectedSpread] = useState<string>("3-card");
  const [tarotQuestion, setTarotQuestion] = useState<string>("");
  const [detailedHoroscopeScope, setDetailedHoroscopeScope] = useState<'daily'|'weekly'|'monthly'|'yearly'>('weekly');
  const [lang, setLang] = useState<SupportedLang>('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [horoscopeLoading, setHoroscopeLoading] = useState(false);
  const [tarotLoading, setTarotLoading] = useState(false);
  const userIdRef = useRef<string>('user-' + Date.now());

  const validDob = /^\d{4}-\d{2}-\d{2}$/.test(dob);

  async function handleAnalyze() {
    if (!validDob) return;
    setLoading(true);
    try {
      const sign = getZodiacFromDate(new Date(dob));
      setZodiac(sign);
      const h = await getHoroscope(sign as ZodiacSign, horizon, lang);
      setFortune(h);
    } catch (error) {
      console.error("Error getting horoscope:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleTarot() {
    setTarot(drawTarot(lang));
  }

  async function handleDetailedHoroscope() {
    if (!validDob) return;
    setHoroscopeLoading(true);
    try {
      const currentZodiac = zodiac || getZodiacFromDate(new Date(dob));
      const startDate = new Date().toISOString().split('T')[0];
      const response = await fetch('/api/horoscope/detailed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sign: currentZodiac,
          scope: detailedHoroscopeScope,
          startDate,
          lang
        })
      });
      const data = await response.json();
      if (data.success) {
        setDetailedHoroscope(data.horoscope);
        if (!zodiac) {
          setZodiac(currentZodiac);
        }
      }
    } catch (error) {
      console.error("Error getting detailed horoscope:", error);
    } finally {
      setHoroscopeLoading(false);
    }
  }

  async function handleAdvancedTarot() {
    if (!selectedSpread) {
      console.error("No spread selected");
      return;
    }
    setTarotLoading(true);
    try {
      const response = await fetch('/api/tarot/advanced', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          spreadName: selectedSpread,
          userId: userIdRef.current,
          question: tarotQuestion,
          lang
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setAdvancedTarot(data.session);
      } else {
        console.error("API returned error:", data.error);
      }
    } catch (error) {
      console.error("Error getting advanced tarot:", error);
      alert("Failed to draw tarot cards. Please try again.");
    } finally {
      setTarotLoading(false);
    }
  }

  // Auto-refresh current readings when language changes
  useEffect(() => {
    // Force a re-render by updating a dummy state if needed
    // React should automatically re-render when lang changes, but this ensures it
    
    // Refresh basic horoscope if zodiac is set
    if (zodiac && validDob && !loading) {
      getHoroscope(zodiac as ZodiacSign, horizon, lang).then(setFortune);
    }

    // Refresh basic tarot if cards are drawn
    if (tarot) {
      setTarot(drawTarot(lang));
    }

    const shouldRefreshHoroscope = !!detailedHoroscope && validDob && !horoscopeLoading;
    if (shouldRefreshHoroscope) {
      handleDetailedHoroscope();
    }

    const shouldRefreshTarot = !!advancedTarot && !tarotLoading;
    if (shouldRefreshTarot) {
      handleAdvancedTarot();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showLangMenu && !target.closest('[data-lang-menu]')) {
        setShowLangMenu(false);
      }
    };

    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showLangMenu]);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0B1426',
      color: '#D4AF37',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#D4AF37',
      fontFamily: 'var(--font-playfair), serif'
    },
    card: {
      background: 'rgba(11, 20, 38, 0.9)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '0.5rem',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: 'rgba(11, 20, 38, 0.5)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '0.5rem',
      color: '#D4AF37',
      fontSize: '1rem',
      marginBottom: '1rem'
    },
    button: {
      backgroundColor: 'rgba(212, 175, 55, 0.2)',
      border: '1px solid rgba(212, 175, 55, 0.4)',
      borderRadius: '0.5rem',
      padding: '0.75rem 1.5rem',
      color: '#D4AF37',
      fontSize: '1rem',
      cursor: 'pointer',
      marginRight: '0.5rem',
      marginBottom: '0.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    result: {
      marginTop: '1rem',
      padding: '1rem',
      background: 'rgba(212, 175, 55, 0.1)',
      borderRadius: '0.5rem',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      {/* Decorative Header with Celestial Elements */}
      <header style={{ position: 'relative', textAlign: 'center', padding: '4rem 1rem', marginBottom: '2rem' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Central Sunburst */}
          <div style={{
            width: '8rem',
            height: '8rem',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '6rem',
              height: '6rem',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  backgroundColor: 'rgba(212, 175, 55, 0.4)',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
          </div>
          {/* Radiating lines */}
          <div style={{ position: 'absolute', inset: 0 }}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '4rem',
                  backgroundColor: 'rgba(212, 175, 55, 0.2)',
                  transformOrigin: 'bottom',
                  transform: `rotate(${i * 45}deg) translateY(-50px)`,
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
          </div>
        </div>
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Language Selector Button */}
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 20 }} data-lang-menu>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              data-lang-menu
              style={{
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                color: '#D4AF37',
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-inter), sans-serif'
              }}
            >
              <span>🌐</span>
              <span>{SUPPORTED_LANGUAGES.find(l => l.code === lang)?.name || 'English'}</span>
              <span>{showLangMenu ? '▲' : '▼'}</span>
            </button>
            
            {/* Language Menu Dropdown */}
            {showLangMenu && (
              <div data-lang-menu style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '0.5rem',
                backgroundColor: 'rgba(11, 20, 38, 0.95)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                minWidth: '200px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                zIndex: 30
              }}>
                {SUPPORTED_LANGUAGES.map(language => (
                  <button
                    key={language.code}
                    onClick={() => {
                      console.log('Changing language to:', language.code);
                      setLang(language.code);
                      setShowLangMenu(false);
                    }}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: lang === language.code 
                        ? 'rgba(212, 175, 55, 0.3)' 
                        : 'transparent',
                      border: 'none',
                      borderRadius: '0.25rem',
                      color: lang === language.code ? '#D4AF37' : '#F4E4BC',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-inter), sans-serif',
                      marginBottom: '0.25rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (lang !== language.code) {
                        e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (lang !== language.code) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <h1 style={styles.title}>{getTranslation('title', lang)}</h1>
          <div style={{
            width: '8rem',
            height: '1px',
            backgroundColor: '#D4AF37',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{ color: '#F4E4BC', fontSize: '1.1rem', fontFamily: 'var(--font-inter), sans-serif' }}>
            {getTranslation('subtitle', lang)}
          </p>
        </div>
      </header>

      <main key={lang}>
        <div style={styles.card}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'var(--font-playfair), serif' }}>{getTranslation('enterInformation', lang)}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F4E4BC' }}>
                {getTranslation('dateOfBirth', lang)}
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                style={styles.input}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F4E4BC' }}>
                {getTranslation('timeframe', lang)}
              </label>
              <select
                value={horizon}
                onChange={(e) => setHorizon(e.target.value as Horizon)}
                style={styles.input}
              >
                <option value="daily">{getTranslation('daily', lang)}</option>
                <option value="monthly">{getTranslation('monthly', lang)}</option>
                <option value="yearly">{getTranslation('yearly', lang)}</option>
              </select>
            </div>
            
          </div>

          <div>
            <button
              onClick={handleAnalyze}
              disabled={!validDob || loading}
              style={{
                ...styles.button,
                opacity: (!validDob || loading) ? 0.4 : 1
              }}
            >
              {loading ? getTranslation('consultingStars', lang) : getTranslation('getHoroscope', lang)}
            </button>
            <button onClick={handleTarot} style={styles.button}>
              {getTranslation('drawTarot', lang)}
            </button>
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)} 
              style={{...styles.button, backgroundColor: showAdvanced ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)'}}
            >
              {showAdvanced ? getTranslation('hideAdvanced', lang) : getTranslation('showAdvanced', lang)}
            </button>
          </div>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              {/* Decorative Circle Icon */}
              <div style={{
                width: '4rem',
                height: '4rem',
                border: '2px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  border: '1px solid rgba(212, 175, 55, 0.6)',
                  borderRadius: '50%'
                }}></div>
              </div>
              <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-playfair), serif' }}>{getTranslation('zodiacInsights', lang)}</h2>
              <div style={{
                width: '3rem',
                height: '1px',
                backgroundColor: '#D4AF37',
                margin: '0 auto'
              }}></div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              {zodiac ? (
                <p style={{
                  color: '#F4E4BC',
                  fontSize: '1.125rem',
                  fontFamily: 'var(--font-inter), sans-serif'
                }}>
                  <span style={{ fontFamily: 'var(--font-playfair), serif', color: '#D4AF37', fontSize: '1.25rem' }}>
                    {zodiac}
                  </span>
                </p>
              ) : (
                <p style={{ color: '#F4E4BC', fontFamily: 'var(--font-inter), sans-serif' }}>
                  {getTranslation('enterDobToReveal', lang)}
                </p>
              )}
            </div>
            
            {zodiac && (
              <div style={styles.result}>
                {fortune && (
                  <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-playfair), serif',
                      color: '#D4AF37',
                      fontSize: '1.125rem',
                      marginBottom: '0.75rem',
                      textTransform: 'capitalize'
                    }}>
                      {getTranslation(horizon, lang)} {getTranslation('horoscope', lang)}
                    </h3>
                    <p style={{
                      color: '#F4E4BC',
                      fontFamily: 'var(--font-inter), sans-serif',
                      lineHeight: '1.75'
                    }}>{fortune}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div style={styles.card}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              {/* Decorative Circle Icon */}
              <div style={{
                width: '4rem',
                height: '4rem',
                border: '2px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  border: '1px solid rgba(212, 175, 55, 0.6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: 'rgba(212, 175, 55, 0.4)',
                    borderRadius: '50%'
                  }}></div>
                </div>
              </div>
              <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-playfair), serif' }}>{getTranslation('tarotReading', lang)}</h2>
              <div style={{
                width: '3rem',
                height: '1px',
                backgroundColor: '#D4AF37',
                margin: '0 auto'
              }}></div>
            </div>
            {tarot ? (
              <div>
                <p style={{ marginBottom: '1rem', color: '#F4E4BC', fontStyle: 'italic' }}>
                  {tarot.summary}
                </p>
                {tarot.cards.map((card, index) => (
                  <div key={card.id} style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(212, 175, 55, 0.3)' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      {index === 0 ? getTranslation('past', lang) : index === 1 ? getTranslation('present', lang) : getTranslation('future', lang)}: {card.name}
                      {card.reversed && <span style={{ fontSize: '0.875rem', opacity: 0.7 }}> {getTranslation('reversed', lang)}</span>}
                    </p>
                    <p style={{ color: '#F4E4BC', fontSize: '0.9rem' }}>{card.meaning}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#F4E4BC' }}>{getTranslation('clickDrawTarot', lang)}</p>
            )}
          </div>
        </div>

        {/* Advanced Features Section */}
        {showAdvanced && (
          <div style={{ marginTop: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#D4AF37', fontFamily: 'var(--font-playfair), serif' }}>
                {getTranslation('advancedCosmicInsights', lang)}
              </h2>
              <div style={{
                width: '8rem',
                height: '1px',
                backgroundColor: '#D4AF37',
                margin: '0 auto'
              }}></div>
            </div>
            
            <div style={styles.grid}>
              {/* Detailed Horoscope */}
              <div style={styles.card}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    border: '2px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem'
                  }}>
                    <div style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      border: '1px solid rgba(212, 175, 55, 0.6)',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', textAlign: 'center', fontFamily: 'var(--font-playfair), serif' }}>{getTranslation('detailedHoroscope', lang)}</h3>
                  <div style={{
                    width: '3rem',
                    height: '1px',
                    backgroundColor: '#D4AF37',
                    margin: '0 auto'
                  }}></div>
                </div>
                
                {zodiac && (
                  <div style={{ textAlign: 'center', marginBottom: '1rem', padding: '0.5rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '0.5rem' }}>
                    <span style={{ color: '#F4E4BC' }}>{getTranslation('readingFor', lang)} </span>
                    <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>{zodiac}</span>
                  </div>
                )}
                
                {validDob && (
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F4E4BC', fontSize: '0.875rem' }}>
                      {getTranslation('selectTimePeriod', lang)}:
                    </label>
                    <select
                      value={detailedHoroscopeScope}
                      onChange={(e) => setDetailedHoroscopeScope(e.target.value as any)}
                      style={styles.input}
                    >
                      <option value="daily">{getTranslation('daily', lang)}</option>
                      <option value="weekly">{getTranslation('weekly', lang)}</option>
                      <option value="monthly">{getTranslation('monthly', lang)}</option>
                      <option value="yearly">{getTranslation('yearly', lang)}</option>
                    </select>
                  </div>
                )}
                
                <button
                  onClick={handleDetailedHoroscope}
                  disabled={!validDob || horoscopeLoading}
                  style={{
                    ...styles.button,
                    width: '100%',
                    opacity: (!validDob || horoscopeLoading) ? 0.4 : 1
                  }}
                >
                  {horoscopeLoading ? getTranslation('generating', lang) : getTranslation('getDetailedReading', lang)}
                </button>

                {detailedHoroscope && (
                  <div style={{ marginTop: '1.5rem' }}>
                    {/* Scores */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', color: '#D4AF37', fontWeight: 'bold' }}>
                          {detailedHoroscope.scores.love}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#F4E4BC' }}>{getTranslation('love', lang)}</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', color: '#D4AF37', fontWeight: 'bold' }}>
                          {detailedHoroscope.scores.career}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#F4E4BC' }}>{getTranslation('career', lang)}</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', color: '#D4AF37', fontWeight: 'bold' }}>
                          {detailedHoroscope.scores.wealth}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#F4E4BC' }}>{getTranslation('wealth', lang)}</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', color: '#D4AF37', fontWeight: 'bold' }}>
                          {detailedHoroscope.scores.health}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#F4E4BC' }}>{getTranslation('health', lang)}</div>
                      </div>
                    </div>

                    {detailedHoroscope.summary && (
                      <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '0.5rem' }}>
                        <h4 style={{ color: '#D4AF37', marginBottom: '0.5rem' }}>{getTranslation('summary', lang)}</h4>
                        <p style={{ color: '#F4E4BC', fontSize: '0.875rem', lineHeight: '1.6' }}>
                          {detailedHoroscope.summary}
                        </p>
                      </div>
                    )}

                    {detailedHoroscope.suggestions && detailedHoroscope.suggestions.length > 0 && (
                      <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ color: '#D4AF37', marginBottom: '0.5rem' }}>{getTranslation('suggestions', lang)}</h4>
                        <ul style={{ color: '#F4E4BC', fontSize: '0.875rem', paddingLeft: '1.5rem' }}>
                          {detailedHoroscope.suggestions.map((s, i) => (
                            <li key={i} style={{ marginBottom: '0.25rem' }}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div style={{ fontSize: '0.875rem', color: '#F4E4BC' }}>
                      <p><strong>{getTranslation('luckyColor', lang)}</strong> {detailedHoroscope.lucky.color}</p>
                      <p><strong>{getTranslation('luckyNumber', lang)}</strong> {detailedHoroscope.lucky.number}</p>
                      <p><strong>{getTranslation('keyDates', lang)}</strong> {detailedHoroscope.keyDates.join(', ')}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Advanced Tarot */}
              <div style={styles.card}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    border: '2px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem'
                  }}>
                    <div style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      border: '1px solid rgba(212, 175, 55, 0.6)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '0.75rem',
                        height: '0.75rem',
                        backgroundColor: 'rgba(212, 175, 55, 0.4)',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', textAlign: 'center', fontFamily: 'var(--font-playfair), serif' }}>{getTranslation('advancedTarot', lang)}</h3>
                  <div style={{
                    width: '3rem',
                    height: '1px',
                    backgroundColor: '#D4AF37',
                    margin: '0 auto'
                  }}></div>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F4E4BC', fontSize: '0.875rem' }}>
                    {getTranslation('spreadType', lang)}:
                  </label>
                  <select
                    value={selectedSpread}
                    onChange={(e) => setSelectedSpread(e.target.value)}
                    style={styles.input}
                  >
                    {Object.entries(TAROT_SPREADS).map(([key, spread]) => (
                      <option key={key} value={key}>
                        {spread.name} ({spread.positions.length} cards)
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F4E4BC', fontSize: '0.875rem' }}>
                    {getTranslation('yourQuestion', lang)}:
                  </label>
                  <textarea
                    value={tarotQuestion}
                    onChange={(e) => setTarotQuestion(e.target.value)}
                    placeholder={getTranslation('whatGuidance', lang)}
                    style={{
                      ...styles.input,
                      height: '4rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  onClick={handleAdvancedTarot}
                  disabled={tarotLoading}
                  style={{
                    ...styles.button,
                    width: '100%',
                    opacity: tarotLoading ? 0.4 : 1
                  }}
                >
                  {tarotLoading ? getTranslation('drawingCards', lang) : getTranslation('drawAdvancedSpread', lang)}
                </button>

                {advancedTarot && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ color: '#D4AF37', marginBottom: '1rem', textAlign: 'center' }}>
                      {advancedTarot.spread.name.toUpperCase()} SPREAD
                    </h4>
                    
                    <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
                      {advancedTarot.cards.map((card, index) => (
                        <TarotCardComponent
                          key={index}
                          card={card}
                          position={advancedTarot.spread.positions[index]}
                          showImage={true}
                        />
                      ))}
                    </div>

                    <div style={{ padding: '1rem', background: 'rgba(11, 20, 38, 0.5)', borderRadius: '0.5rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                      <h4 style={{ color: '#D4AF37', marginBottom: '0.75rem' }}>{getTranslation('reading', lang)}:</h4>
                      <p style={{ color: '#F4E4BC', fontSize: '0.875rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                        {advancedTarot.readingText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', color: 'rgba(212, 175, 55, 0.7)' }}>
        <p>{getTranslation('entertainmentNotice', lang)}</p>
      </footer>
    </div>
  );
}

