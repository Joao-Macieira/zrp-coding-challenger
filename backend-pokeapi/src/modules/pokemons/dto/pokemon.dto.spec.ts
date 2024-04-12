import { pokemonFromApiSorted } from '../../../shared/tests/pokemon-mock';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonOutputMapper } from './pokemon.dto';

describe('PokemonOutputMapper Unit tests', () => {
  it('should convert an pokemon in output', () => {
    const output = PokemonOutputMapper.toOutput(
      pokemonFromApiSorted as unknown as Pokemon,
    );

    expect(output).toStrictEqual({
      id: 132,
      abilities: [
        {
          ability: {
            name: 'imposter',
            url: 'https://pokeapi.co/api/v2/ability/150/',
          },
          is_hidden: true,
          slot: 3,
        },
        {
          ability: {
            name: 'limber',
            url: 'https://pokeapi.co/api/v2/ability/7/',
          },
          is_hidden: false,
          slot: 1,
        },
      ],
      name: 'ditto',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      },
    });
  });
});
