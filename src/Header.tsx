import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#333'
  };

  const homeStyle: React.CSSProperties = {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    textDecoration: 'none'
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={{ ...homeStyle, ...linkStyle }}>
        <span role="img" aria-label="home">🏠</span>
        <span style={{ marginLeft: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>
          Home
        </span>
      </Link>

      <div>
        <Link to="/login" style={buttonStyle}>
          Login
        </Link>
        <Link to="/signup" style={{ ...buttonStyle, marginLeft: '10px' }}>
          Signup
        </Link>
      </div>
    </header>
  );
};

export default Header;