// import React from 'react'; // not needed for React 17

// styles
import '../app.css';

function Person({ person }) {
  return (
    <div className="app-card">
      <h3 className="app-card__title">{person.name}</h3>
      <p className="app-card__attr">Gender - {person.gender}</p>
      <p className="app-card__attr">Birth Year - {person.birth_year}</p>
    </div>
  );
}

export default Person;
