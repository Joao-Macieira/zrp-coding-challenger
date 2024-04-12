import { Module } from '@nestjs/common';
import { PokemonsModule } from './modules/pokemons/pokemons.module';

@Module({
  imports: [PokemonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
