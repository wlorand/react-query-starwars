// import React from 'react'

// data-fetching hook
import { useQuery } from 'react-query';

// child components
import Person from './Person';

// styles
import '../app.css';

const SWAPI_PEOPLE_ENDPOINT = 'https://swapi.dev/api/people/';

const fetchPeople = async () => {
  const res = await fetch(SWAPI_PEOPLE_ENDPOINT);
  return res.json();
};

function People() {
  const { data, status } = useQuery('people', fetchPeople);

  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {status === 'error' && <div>Error Fetching Data</div>}
      {status === 'loading' && <div>Loading Data...</div>}

      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
