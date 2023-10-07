import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import myImage from '/images/home.jpg';

export function Home() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    height: '80vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${myImage})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const pStyle: React.CSSProperties = {
    fontFamily: "Jazz LET, monospace",
    fontSize: '14px',
  };

  const h1Style: React.CSSProperties = {
    fontFamily: "Jazz LET, monospace",
  };

  const normalButtonStyle: React.CSSProperties = {
    transition: 'transform 0.2s'
  };

  const hoverButtonStyle: React.CSSProperties = {
    ...normalButtonStyle,
    transform: 'scale(1.1)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Phone Bay</h1>
      <p style={pStyle}>Shopping for phones just got easier!</p>
      <Button
        style={isHovered ? hoverButtonStyle : normalButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate('/store')}
        variant="primary"
      >
        Shop Here!
      </Button>
    </div>
  );
}
