import React, { useState } from 'react';

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

interface Props {
  onAdd: (hero: Superhero) => void;
}

const SuperheroForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState(5);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !superpower) {
      alert('Please fill in all fields');
      return;
    }

    await onAdd({ name, superpower, humilityScore });
    setName('');
    setSuperpower('');
    setHumilityScore(5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        required
      />
      <input
        type="number"
        min="1"
        max="10"
        value={humilityScore}
        onChange={(e) => setHumilityScore(Number(e.target.value))}
        required
      />
      <button type="submit">Add Superhero</button>
    </form>
  );
};

export default SuperheroForm;
