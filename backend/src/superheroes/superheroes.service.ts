import { Injectable } from '@nestjs/common';
import { Superhero } from './superheroes.interface';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  addSuperhero(superhero: Superhero): string {
    if (
      this.superheroes.some(
        (hero) => hero.name.toLowerCase === superhero.name.toLowerCase,
      )
    ) {
      return `The superhero ${superhero.name} is already in the squad. Try adding another one!`;
    }

    if (superhero.humilityScore < 1 || superhero.humilityScore > 10) {
      return `Hey ! ${superhero.name} humility score must be between 1 and 10`;
    }

    this.superheroes.push(superhero);
    return `${superhero.name} has been added to the squad ! Welcome.`;
  }

  getSuperheroes(): Superhero[] {
    return this.superheroes
      ? this.superheroes.sort(
          (hero1, hero2) => hero2.humilityScore - hero1.humilityScore,
        )
      : [];
  }
}
