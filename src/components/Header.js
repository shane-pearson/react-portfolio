import React from 'react';
import './styles/Header.css';
import NavTabs from './NavTabs';


const styles = {
  heading: {
    background: '#9a74db',
    minHeight: 100,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  h1: {
    padding: 20,
    fontSize: 35,
  }

};


function Header({currentPage, handlePageChange}) {

  return (
    <header style={styles.heading} className="Header">
      <h1 style={styles.h1}>Shane Pearson's Portfolio</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}></NavTabs>
    </header>
  );
}

export default Header;