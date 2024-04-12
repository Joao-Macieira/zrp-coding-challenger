export const pokemonFromApiSorted = {
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
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  },
};

export const pokemonFromApiUnsorted = {
  id: 132,
  abilities: [
    {
      ability: {
        name: 'limber',
        url: 'https://pokeapi.co/api/v2/ability/7/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'imposter',
        url: 'https://pokeapi.co/api/v2/ability/150/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  name: 'ditto',
  sprites: {
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  },
};

export const httpServiceMock = {
  axiosRef: {
    get: jest.fn().mockResolvedValue({ data: pokemonFromApiUnsorted }),
  },
};
