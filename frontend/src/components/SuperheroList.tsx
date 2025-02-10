import React from "react";
import { Superhero } from '../types/Superhero'; // Assuming you have a type definition

interface Props {
  superheroes: Superhero[];
}

const SuperheroList: React.FC<Props> = ({ superheroes }) => (
  <ul>
    {superheroes.map(hero => (
      <li key={hero.name}>Name: {hero.name} SuperPower: {hero.superpower} (Humility: {hero.humilityScore})</li>
    ))}
  </ul>
);

export default SuperheroList;
