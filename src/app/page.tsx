"use client";

import { useState } from "react";
import { getZodiacFromDate, type ZodiacSign } from "@/lib/zodiac";
import { getHoroscope } from "@/lib/horoscope";
import { drawTarot } from "@/lib/tarot";

type Horizon = "daily" | "monthly" | "yearly";

export default function HomePage() {
  const [dob, setDob] = useState<string>("");
  const [zodiac, setZodiac] = useState<string | null>(null);
  const [horizon, setHorizon] = useState<Horizon>("daily");
  const [fortune, setFortune] = useState<string>("");
  const [tarot, setTarot] = useState<ReturnType<typeof drawTarot> | null>(null);
  const [loading, setLoading] = useState(false);

  const validDob = /^\d{4}-\d{2}-\d{2}$/.test(dob);

  async function handleAnalyze() {
    if (!validDob) return;
    setLoading(true);
    try {
      const sign = getZodiacFromDate(new Date(dob));
      setZodiac(sign);
      const h = await getHoroscope(sign as ZodiacSign, horizon);
      setFortune(h);
    } catch (error) {
      console.error("Error getting horoscope:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleTarot() {
    setTarot(drawTarot());
  }

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
      color: '#D4AF37'
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
      <header style={styles.header}>
        <h1 style={styles.title}>🔮 TAROT & ASTROLOGY 🔮</h1>
        <p style={{ color: '#F4E4BC', fontSize: '1.1rem' }}>
          Discover your cosmic destiny through the ancient wisdom of the stars and tarot
        </p>
      </header>

      <main>
        <div style={styles.card}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Enter Your Information</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F4E4BC' }}>
                Date of Birth
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
                Timeframe
              </label>
              <select
                value={horizon}
                onChange={(e) => setHorizon(e.target.value as Horizon)}
                style={styles.input}
              >
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
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
              {loading ? "Consulting Stars..." : "Get Horoscope"}
            </button>
            <button onClick={handleTarot} style={styles.button}>
              Draw Tarot Cards
            </button>
          </div>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Zodiac Sign</h2>
            {zodiac ? (
              <div style={styles.result}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {zodiac}
                </p>
                {fortune && (
                  <div style={{ marginTop: '1rem', color: '#F4E4BC' }}>
                    <h3 style={{ marginBottom: '0.5rem', textTransform: 'capitalize' }}>
                      {horizon} Horoscope
                    </h3>
                    <p>{fortune}</p>
                  </div>
                )}
              </div>
            ) : (
              <p style={{ color: '#F4E4BC' }}>Enter your date of birth to reveal your sign</p>
            )}
          </div>

          <div style={styles.card}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Tarot Reading</h2>
            {tarot ? (
              <div>
                <p style={{ marginBottom: '1rem', color: '#F4E4BC', fontStyle: 'italic' }}>
                  {tarot.summary}
                </p>
                {tarot.cards.map((card, index) => (
                  <div key={card.id} style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(212, 175, 55, 0.3)' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      {index === 0 ? "PAST" : index === 1 ? "PRESENT" : "FUTURE"}: {card.name}
                      {card.reversed && <span style={{ fontSize: '0.875rem', opacity: 0.7 }}> (reversed)</span>}
                    </p>
                    <p style={{ color: '#F4E4BC', fontSize: '0.9rem' }}>{card.meaning}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#F4E4BC' }}>Click &quot;Draw Tarot Cards&quot; for a reading</p>
            )}
          </div>
        </div>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', color: 'rgba(212, 175, 55, 0.7)' }}>
        <p>For entertainment and reflection. Not a substitute for professional advice.</p>
      </footer>
    </div>
  );
}

