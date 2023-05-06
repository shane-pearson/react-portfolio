import React from 'react';

const styles = {
  nav: {
    marginTop: -75,
    fontSize: 25,
    float: 'right',
    fontWeight: 'bold',
    },
  anchor: {
    color: 'white',
  }

  };

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.nav}>
    <ul className="nav">
      <li className="nav-item">
        <a style={styles.anchor}
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
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
      <li className="nav-item">
        <a style={styles.anchor}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
