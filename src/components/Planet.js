// import React from 'react';

// styles
import '../app.css';

function Planet({ planet }) {
  return (
    <div className="app-card">
      <h3 className="app-card__title">{planet.name}</h3>
      <p className="app-card__attr">Population - {planet.population}</p>
      <p className="app-card__attr">Terrain - {planet.terrain}</p>
    </div>
  );
}

export default Planet;
