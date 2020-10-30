// import React from 'react'; // not needed for react 17
import { useState } from 'react';

// react 3p imports
import { ReactQueryDevtools } from 'react-query-devtools';

// child components
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

// styles
import './app.css';

function App() {
  // define a piece of state for the 'page' the app should display
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="app">
        <h1 className="app-title">Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="app-content">
          {/* conditional rendering via ternary */}
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
