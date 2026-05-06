import React from 'react';

const Card = ({ children, style = {}, onClick }) => (
  <div
    onClick={onClick}
    className="glass-panel"
    style={{
      padding: '24px',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      ...style
    }}
  >
    {children}
  </div>
);

export default Card;
