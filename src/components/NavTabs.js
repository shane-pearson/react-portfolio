import React from 'react';

const styles = {
  nav: {
    marginTop: -75,
    fontSize: 18,
    float: 'right',
    fontFamily: "arial",
    },
  anchor: {
    color: '#6fa758',
  }

  };

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.nav}>
    <ul className="nav">
      <li className="nav-item">
        <a style={styles.anchor}
          href="#Home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.anchor}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.anchor}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
