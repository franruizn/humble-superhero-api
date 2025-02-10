import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('SuperheroesController', () => {
  let app: INestApplication;
  let superheroesService: SuperheroesService;

  const possibleValues = {
    successMessage: (name: string) =>
      `${name} has been added to the squad ! Welcome.`,
    duplicateMessage: (name: string) =>
      `The superhero ${name} is already in the squad. Try adding another one!`,
    humilityMessage: (name: string) =>
      `Hey ! ${name} humility score must be between 1 and 10`,
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    app = moduleRef.createNestApplication();
    superheroesService = moduleRef.get<SuperheroesService>(SuperheroesService);
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  test('should mock a successful API call', async () => {
    const newSuperhero = {
      name: 'One Punch Man',
      superpower: 'Super Strength',
      humilityScore: 10,
    };

    const addSuperheroSpy = jest
      .spyOn(superheroesService, 'addSuperhero')
      .mockResolvedValue({
        message: `One Punch Man has been added to the squad ! Welcome.`,
      } as never);

    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send(newSuperhero);

    expect(addSuperheroSpy).toHaveBeenCalledWith(newSuperhero);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: possibleValues.successMessage(newSuperhero.name),
    });
  });

  test('should mock a duplicated superhero API call', async () => {
    const duplicateHero = {
      name: 'Monkey D Luffy',
      superpower: 'Rubber Body',
      humilityScore: 4,
    };

    const addSuperheroSpy = jest
      .spyOn(superheroesService, 'addSuperhero')
      .mockResolvedValue({
        message: `The superhero Monkey D Luffy is already in the squad. Try adding another one!`,
      } as never);

    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send(duplicateHero);

    expect(addSuperheroSpy).toHaveBeenCalledWith(duplicateHero);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: possibleValues.duplicateMessage(duplicateHero.name),
    });
  });

  test('should mock an invalid humility score API call', async () => {
    const invalidHero = {
      name: 'Nezuko',
      superpower: 'Semi-Devil',
      humilityScore: 11,
    };

    const addSuperheroSpy = jest
      .spyOn(superheroesService, 'addSuperhero')
      .mockResolvedValue({
        message: `Hey ! Nezuko humility score must be between 1 and 10`,
      } as never);

    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send(invalidHero);

    expect(addSuperheroSpy).toHaveBeenCalledWith(invalidHero);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: possibleValues.humilityMessage(invalidHero.name),
    });
  });
});
