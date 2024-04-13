import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Spinner } from '../components/Spinner';

import { useHomeController } from './useHomeController';

export function Home() {
  const { searchedPokemon, register, errors, handleSubmit, isLoading } =
    useHomeController();

  return (
    <div className="p-6">
      <header className="flex w-full justify-center">
        <p className="text-3xl">
          Pesquise as habilidades do seu pokemon favorito
        </p>
      </header>

      <div className="mt-10 flex w-full justify-center">
        <form className="flex w-[50%] gap-4" onSubmit={handleSubmit}>
          <Input
            placeholder="Nome do pokemon"
            {...register('searchText')}
            error={errors.searchText?.message}
          />
          <Button type='submit' variant="ghost" disabled={isLoading}>
            {isLoading ? <Spinner /> : 'Pesquisar'}
          </Button>
        </form>
      </div>

      <div className="mt-10 flex w-full justify-center">
        <div className="w-[420px] rounded-lg bg-white p-5 text-black">
          {!searchedPokemon && (
            <p className="text-center">
              Pesquise por um pokemon para visualizar seus dados
            </p>
          )}
          {searchedPokemon && (
            <div className="flex gap-4">
              <img
                width={144}
                src={searchedPokemon?.sprites.front_default}
                alt="Imagem do pokemon escolhido"
              />
              <div className="flex-1">
                <span>
                  <p>
                    <strong>Nome:</strong> {searchedPokemon.name}
                  </p>
                  <p>
                    <strong>Habilidades:</strong>
                    <br />
                    {searchedPokemon.abilities.map((ability) => (
                      <p className="ml-2">- {ability.ability.name}</p>
                    ))}
                  </p>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
