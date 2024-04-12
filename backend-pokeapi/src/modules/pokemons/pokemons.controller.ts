import { Controller, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  //  /pokemon/name

  @Get(':name')
  findOneByName(@Param('name') name: string) {
    return this.pokemonsService.findOnebyName(name);
  }
}
