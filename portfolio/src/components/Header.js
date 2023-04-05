import React from 'react';
import './styles/Header.css';
import NavTabs from './NavTabs';

const styles = {
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  
};



function Header() {

  return (
    <header style={styles.heading} className="Header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;