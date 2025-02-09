import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SuperheroesModule } from './superheroes/superheroes.module';

@Module({
  imports: [
    SuperheroesModule,
    ServeStaticModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      rootPath: join(__dirname, '..', '..', 'frontend', 'build'),
    }),
  ],
})
export class AppModule {}
