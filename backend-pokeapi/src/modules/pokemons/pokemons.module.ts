import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
