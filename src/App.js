// import React from 'react';
import { useState } from 'react';

// child components
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

// styles
import './app.css';

function App() {
  const [page, setPage] = useState('planets');

  return (
    <div className="app">
      <h1 className="app-title">Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="app-content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
