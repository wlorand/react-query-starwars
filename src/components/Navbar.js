// import React from 'react'; // not needed for React 17

// styles
import '../styles/app.css';

function Navbar({ setPage }) {
  return (
    <nav>
      <button className="nav-btn" onClick={() => setPage('people')}>
        People
      </button>
      <button className="nav-btn" onClick={() => setPage('planets')}>
        Planets
      </button>
    </nav>
  );
}

export default Navbar;
