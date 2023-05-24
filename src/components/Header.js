import React from 'react';
import NavTabs from './NavTabs';



const styles = {
  heading: {
    background: 'none',
    minHeight: 100,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: '#6fa758',
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
      <h1 style={styles.h1}>SP</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}></NavTabs>
    </header>
  );
}

export default Header;