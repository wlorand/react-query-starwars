// import React from 'react';

// data-fetching hook
import { useQuery } from 'react-query';

// child components
import Planet from './Planet';

// styles
import '../app.css';

const SWAPI_PLANETS_ENDPOINT = 'https://swapi.dev/api/planets/';

const fetchPlanets = async () => {
  const res = await fetch(SWAPI_PLANETS_ENDPOINT);
  return res.json();
};

function Planets() {
  // use the useQuery hook
  const { data, status } = useQuery('planets', fetchPlanets);

  console.log(data);

  return (
    <div>
      <h2>Planets</h2>
      {status === 'loading' && <div>Loading Data...</div>}
      {status === 'error' && <div>Error Fetching Data</div>}

      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;
