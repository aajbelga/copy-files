import React, { useState, useEffect } from 'react';

const TopNav = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);

  return (
    <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-emerald)', display: 'inline-block', boxShadow: '0 0 8px var(--neon-emerald)' }}></span>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>System Online</span>
      </div>
      <div style={{ fontFamily: 'monospace', color: 'var(--neon-cyan)', fontWeight: '700', fontSize: '1rem' }}>
        {time.toLocaleTimeString([], { hour12: false })}
      </div>
      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', cursor: 'pointer' }}>
        👤
      </div>
    </div>
  );
};

export default TopNav;
