import { Injectable } from '@nestjs/common';
import { Superhero } from './superheroes.interface';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];
  addSuperhero(superhero: Superhero): string {
    // Check if the same superhero has already been added.
    if (
      this.superheroes.some(
        (hero) =>
          hero.name.toLowerCase() === superhero.name.toLowerCase() &&
          hero.superpower.toLowerCase() ===
            superhero.superpower.toLowerCase() &&
          hero.humilityScore === superhero.humilityScore,
      )
    ) {
      return `The superhero ${superhero.name} is already in the squad. Try adding another one!`;
    }

    // Check that the humility score is between 1 and 10
    if (superhero.humilityScore < 1 || superhero.humilityScore > 10) {
      return `Hey ! ${superhero.name} humility score must be between 1 and 10`;
    }
    // Add the new hero is everything checks
    this.superheroes.push(superhero);
    return `${superhero.name} has been added to the squad ! Welcome.`;
  }

  getSuperheroes(): Superhero[] {
    // Retrieve the heros ordered by humility score
    return this.superheroes
      ? this.superheroes.sort(
          (hero1, hero2) => hero2.humilityScore - hero1.humilityScore,
        )
      : [];
  }
}
