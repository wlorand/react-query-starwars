// import React from 'react';

// styles
import '../app.css';

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
