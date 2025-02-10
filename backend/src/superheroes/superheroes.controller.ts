import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { Superhero } from './superheroes.interface';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}
  // Create the POST endpoint of the API using the method we created on the SuperheroesService
  @Post()
  addSuperhero(@Body() superhero: Superhero): string {
    return this.superheroesService.addSuperhero(superhero);
  }
  // Create the GET endpoint of the API using the method we created on the SuperheroesService
  @Get()
  getSuperheroes(): Superhero[] {
    return this.superheroesService.getSuperheroes();
  }
}
