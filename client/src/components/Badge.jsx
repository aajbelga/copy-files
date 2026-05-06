import React from 'react';

const Badge = ({ children, type = 'default', style = {} }) => {
  const types = {
    success: { background: 'rgba(0,230,118,0.15)', color: '#00E676', border: '1px solid rgba(0,230,118,0.3)' },
    warning: { background: 'rgba(255,193,7,0.15)', color: '#FFC107', border: '1px solid rgba(255,193,7,0.3)' },
    danger:  { background: 'rgba(255,0,60,0.15)',  color: '#FF003C', border: '1px solid rgba(255,0,60,0.3)' },
    Approved: { background: 'rgba(0,230,118,0.15)', color: '#00E676', border: '1px solid rgba(0,230,118,0.3)' },
    Pending:  { background: 'rgba(255,193,7,0.15)', color: '#FFC107', border: '1px solid rgba(255,193,7,0.3)' },
    Rejected: { background: 'rgba(255,0,60,0.15)',  color: '#FF003C', border: '1px solid rgba(255,0,60,0.3)' },
    default:  { background: 'rgba(255,255,255,0.08)', color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.12)' },
  };

  const s = types[type] || types.default;

  return (
    <span style={{
      padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem',
      fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em',
      display: 'inline-block', ...s, ...style
    }}>
      {children}
    </span>
  );
};

export default Badge;
