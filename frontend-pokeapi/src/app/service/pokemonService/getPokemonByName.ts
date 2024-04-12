import { IPokemon } from '../../entities/pokemon';
import { httpClient } from '../httpClient';

type IPokemonResponse = IPokemon;

export async function getPokemonByName(name: string) {
  const { data } = await httpClient.get<IPokemonResponse>(`/pokemons/${name}`);

  return data;
}
