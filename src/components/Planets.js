// import React from 'react'; // not needed for React 17
import axios from 'axios';

// data-fetching hook
import { useQuery } from 'react-query';

// child components
import Planet from './Planet';

// styles
import '../styles/app.css';

const SWAPI_PLANETS_ENDPOINT = 'https://swapi.dev/api/planets/';

const fetchPlanets = async () => {
  const data = await axios.get(SWAPI_PLANETS_ENDPOINT).then((res) => res.data);
  return data;
};

function Planets() {
  // use the useQuery hook
  const { data, status } = useQuery('planets', fetchPlanets, {
    staleTime: 3000,
    cacheTime: 10, // default = 300000 (5 mins)
    onSucess: () => console.log('data fetched with no problemo'),
  });

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
