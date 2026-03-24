'use client';
import { useTheme } from '../app/ThemeProvider';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        background: 'transparent',
        border: '1px solid var(--accent-gold)',
        color: 'var(--text-primary)',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        cursor: 'pointer',
        fontFamily: 'var(--font-secondary)',
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginTop: '1rem',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = 'var(--accent-gold)';
        e.currentTarget.style.color = 'var(--bg-primary)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--text-primary)';
      }}
    >
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
