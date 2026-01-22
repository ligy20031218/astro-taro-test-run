"use client";

import type { TarotCard } from "@/lib/types";

interface TarotCardProps {
  card: TarotCard & { positionIndex: number };
  position: string;
  showImage?: boolean;
}

export default function TarotCardComponent({ card, position, showImage = true }: TarotCardProps) {
  // Get card symbols
  const getCardSymbol = (card: TarotCard) => {
    if (card.arcana === 'major') {
      const majorSymbols: Record<string, string> = {
        'The Fool': '🃏',
        'The Magician': '🎩',
        'The High Priestess': '🌙',
        'The Empress': '👑',
        'The Emperor': '⚔️',
        'The Hierophant': '⛪',
        'The Lovers': '💕',
        'The Chariot': '🏛️',
        'Strength': '🦁',
        'The Hermit': '🕯️',
        'Wheel of Fortune': '🎡',
        'Justice': '⚖️',
        'The Hanged Man': '🙃',
        'Death': '💀',
        'Temperance': '🍷',
        'The Devil': '😈',
        'The Tower': '🗼',
        'The Star': '⭐',
        'The Moon': '🌕',
        'The Sun': '☀️',
        'Judgement': '📯',
        'The World': '🌍'
      };
      return majorSymbols[card.name] || '🃏';
    } else {
      const suitSymbols = {
        'wands': '🔥',
        'cups': '💧',
        'swords': '⚔️',
        'pentacles': '💰'
      };
      return suitSymbols[card.suit || 'wands'];
    }
  };

  const getCardColor = (card: TarotCard) => {
    if (card.arcana === 'major') {
      return card.upright ? '#D4AF37' : '#B8860B';
    }
    
    const suitColors = {
      'wands': card.upright ? '#FF6B35' : '#CC4A1C',
      'cups': card.upright ? '#4A90E2' : '#2E5B8A',
      'swords': card.upright ? '#9B59B6' : '#7D3C98',
      'pentacles': card.upright ? '#27AE60' : '#1E8449'
    };
    
    return suitColors[card.suit || 'wands'];
  };

  const cardColor = getCardColor(card);

  return (
    <div style={{
      border: `2px solid ${cardColor}`,
      borderRadius: '0.75rem',
      background: 'linear-gradient(135deg, rgba(11, 20, 38, 0.95) 0%, rgba(11, 20, 38, 0.85) 100%)',
      backdropFilter: 'blur(4px)',
      padding: '1rem',
      marginBottom: '1rem',
      position: 'relative',
      boxShadow: `0 4px 16px rgba(0, 0, 0, 0.3), 0 0 20px ${cardColor}20`,
      transition: 'all 0.3s ease'
    }}>
      {/* Position Header */}
      <div style={{
        fontSize: '0.875rem',
        color: '#F4E4BC',
        textAlign: 'center',
        marginBottom: '0.75rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {position}
      </div>

      {/* Tarot Card Visual */}
      {showImage && (
        <div style={{
          width: '100%',
          height: '200px',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          marginBottom: '0.75rem',
          border: `2px solid ${cardColor}`,
          position: 'relative',
          background: `linear-gradient(135deg, ${cardColor}20 0%, ${cardColor}10 100%)`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem'
        }}>
          {/* Top Symbol */}
          <div style={{
            fontSize: '2rem',
            color: cardColor,
            textShadow: `0 0 10px ${cardColor}50`
          }}>
            {getCardSymbol(card)}
          </div>
          
          {/* Card Name */}
          <div style={{
            fontSize: '0.875rem',
            color: '#D4AF37',
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'var(--font-playfair), serif',
            lineHeight: '1.2'
          }}>
            {card.name}
          </div>
          
          {/* Central Symbol */}
          <div style={{
            fontSize: '3rem',
            color: cardColor,
            textShadow: `0 0 15px ${cardColor}50`,
            transform: card.upright ? 'none' : 'rotate(180deg)',
            transition: 'transform 0.3s ease'
          }}>
            {getCardSymbol(card)}
          </div>
          
          {/* Arcana Type */}
          <div style={{
            fontSize: '0.75rem',
            color: '#9CA3AF',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {card.arcana === 'major' ? 'Major Arcana' : card.suit}
          </div>
          
          {/* Bottom Symbol (upside down) */}
          <div style={{
            fontSize: '1.5rem',
            color: cardColor,
            textShadow: `0 0 8px ${cardColor}50`,
            transform: 'rotate(180deg)'
          }}>
            {getCardSymbol(card)}
          </div>
          
          {/* Orientation Indicator */}
          <div style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: card.upright ? '#27AE60' : '#E74C3C',
            color: 'white',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            {card.upright ? 'Upright' : 'Reversed'}
          </div>
        </div>
      )}

      {/* Card Name */}
      <div style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#D4AF37',
        marginBottom: '0.5rem',
        textAlign: 'center',
        fontFamily: 'var(--font-playfair), serif'
      }}>
        {card.name}
      </div>

      {/* Arcana Type */}
      <div style={{
        fontSize: '0.75rem',
        color: '#9CA3AF',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {card.arcana === 'major' ? 'Major Arcana' : `${card.suit} Suit`}
      </div>
    </div>
  );
}
