import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', disabled = false, style = {}, fullWidth = false }) => {
  const variants = {
    primary: { background: 'linear-gradient(135deg, #00F0FF, #0080FF)', color: 'white', border: 'none', boxShadow: '0 0 20px rgba(0,240,255,0.3)' },
    secondary: { background: 'rgba(255,255,255,0.06)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'none' },
    danger: { background: 'linear-gradient(135deg, #FF003C, #CC0000)', color: 'white', border: 'none', boxShadow: '0 0 20px rgba(255,0,60,0.4)' },
    sos: { background: 'linear-gradient(135deg, #FF003C, #8B0000)', color: 'white', border: '2px solid rgba(255,0,60,0.5)', boxShadow: '0 0 30px rgba(255,0,60,0.6)', animation: 'danger-breathe 1.5s infinite alternate' },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '12px 24px', borderRadius: '10px', fontFamily: 'Inter, sans-serif',
        fontWeight: '700', fontSize: '0.9rem', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1, transition: 'all 0.2s', width: fullWidth ? '100%' : 'auto',
        letterSpacing: '0.03em',
        ...variants[variant], ...style
      }}
      onMouseOver={e => { if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {children}
    </button>
  );
};

export default Button;
