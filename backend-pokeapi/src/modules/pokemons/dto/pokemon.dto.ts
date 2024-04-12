import { Abilities, Pokemon } from '../entities/pokemon.entity';

export interface GetPokemonByNameOutput {
  id: string;
  abilities: Abilities[];
  name: string;
  sprites: {
    front_default: string;
  };
}

export class PokemonOutputMapper {
  static toOutput(entity: Pokemon): GetPokemonByNameOutput {
    return {
      id: entity.id,
      abilities: entity.abilities,
      name: entity.name,
      sprites: entity.sprites,
    };
  }
}
