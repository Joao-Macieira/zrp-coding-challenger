import { PokemonOutputMapper } from './pokemon.dto';

describe('PokemonOutputMapper Unit tests', () => {
  it('should convert an pokemon in output', () => {
    const date = new Date();

    const pokemonFromApi = {
      id: '123',
      name: 'Movie',
      email: 'email@email.com',
      password: 'test123',
      role: 'ADMIN',
      isActive: true,
      createdAt: date,
      updatedAt: date,
    };

    const output = PokemonOutputMapper.toOutput(pokemonFromApi);

    expect(output).toStrictEqual({
      id: '123',
      name: 'Movie',
      email: 'email@email.com',
      role: 'ADMIN',
      isActive: true,
      createdAt: date,
      updatedAt: date,
    });
  });
});
