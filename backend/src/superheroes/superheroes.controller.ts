import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { Superhero } from './superheroes.interface';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(@Body() superhero: Superhero): string {
    return this.superheroesService.addSuperhero(superhero);
  }

  @Get()
  getSuperheroes(): Superhero[] {
    return this.superheroesService.getSuperheroes();
  }
}
