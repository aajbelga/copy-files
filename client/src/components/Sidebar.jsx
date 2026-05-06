import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/student', icon: '🎓', label: 'Dashboard' },
  { path: '/apply', icon: '📝', label: 'Apply Leave' },
  { path: '/qr', icon: '🔲', label: 'QR Pass' },
  { path: '/warden', icon: '🛡️', label: 'Warden' },
  { path: '/security', icon: '🔐', label: 'Security' },
  { path: '/sos', icon: '🚨', label: 'SOS Alert' },
];

const Sidebar = ({ isCollapsed, toggleSidebar }) => (
  <aside style={{
    width: isCollapsed ? '72px' : '240px', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
    background: 'rgba(10,15,31,0.9)', backdropFilter: 'blur(20px)',
    borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex',
    flexDirection: 'column', padding: '20px 12px', gap: '6px',
    flexShrink: 0, borderRadius: '16px', height: 'calc(100vh - 40px)', position: 'sticky', top: '20px',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between', marginBottom: '24px', padding: '0 4px' }}>
      {!isCollapsed && <span style={{ fontSize: '1rem', fontWeight: '800', letterSpacing: '-0.5px', color: 'white' }}>Safe<span style={{ color: 'var(--neon-cyan)' }}>Campus</span></span>}
      <button onClick={toggleSidebar} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-secondary)', cursor: 'pointer', padding: '6px 8px', fontSize: '0.9rem', lineHeight: 1 }}>
        {isCollapsed ? '→' : '←'}
      </button>
    </div>
    {navItems.map(item => (
      <NavLink key={item.path} to={item.path} style={({ isActive }) => ({
        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
        borderRadius: '10px', textDecoration: 'none', transition: '0.2s',
        background: isActive ? 'rgba(0,240,255,0.1)' : 'transparent',
        color: isActive ? 'var(--neon-cyan)' : 'var(--text-secondary)',
        border: isActive ? '1px solid rgba(0,240,255,0.2)' : '1px solid transparent',
        fontWeight: isActive ? '600' : '400', fontSize: '0.9rem',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        overflow: 'hidden', whiteSpace: 'nowrap',
      })}>
        <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
        {!isCollapsed && item.label}
      </NavLink>
    ))}
  </aside>
);

export default Sidebar;
