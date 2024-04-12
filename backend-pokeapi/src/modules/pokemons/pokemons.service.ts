import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { env } from '../../shared/config/env';
import { PokemonOutputMapper } from './dto/pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonsService {
  constructor(private readonly httpService: HttpService) {}

  async findOnebyName(name: string) {
    try {
      const { data } = await this.httpService.axiosRef.get<Pokemon>(
        env.pokeBaseApi + `/pokemon/${name}`,
      );

      const orderedByAbility = this.orderByAbilities(data);

      const pokemon = {
        ...data,
        abilities: orderedByAbility,
      };

      return PokemonOutputMapper.toOutput(pokemon);
    } catch (error) {
      if (error.response.status === 404) {
        throw new NotFoundException('Pokemon not found');
      }

      throw new InternalServerErrorException();
    }
  }

  private orderByAbilities(pokemon: Pokemon) {
    return pokemon.abilities.sort((a, b) =>
      a.ability.name.localeCompare(b.ability.name),
    );
  }
}
