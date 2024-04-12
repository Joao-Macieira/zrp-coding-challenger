import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { IPokemon } from '../../../app/entities/pokemon';
import { pokemonService } from '../../../app/service/pokemonService';

export const schema = z.object({
  searchText: z.string(),
});

type FormData = z.infer<typeof schema>;

export function useHomeController() {
  const [searchedPokemon, setSearchedPokemon] = useState<IPokemon | null>();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['get-pokemon-by-name'],
    mutationFn: async (name: string) => pokemonService.getPokemonByName(name),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const pokemon = await mutateAsync(data.searchText);
      setSearchedPokemon(pokemon);
    } catch {}
  });

  return {
    searchedPokemon,
    handleSubmit,
    register,
    errors,
    isLoading: isPending,
  };
}
