import React, { useState, useEffect } from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);

  const fetchSuperheroes = async () => {
    const response = await fetch('http://localhost:4000/superheroes');
    const data = await response.json();
    setSuperheroes(data);
  };

  const addSuperhero = async (hero: any) => { 
    const response = await fetch('http://localhost:4000/superheroes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hero),
    });
    fetchSuperheroes();

    const text = await response.text();
    alert(text);
  };

  useEffect(() => { fetchSuperheroes(); }, []);

  return (
    <div>
      <h1>Humble Superhero API</h1>
      <SuperheroForm onAdd={addSuperhero} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
};

export default App;
