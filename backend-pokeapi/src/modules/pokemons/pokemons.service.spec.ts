import { HttpService } from '@nestjs/axios';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  httpServiceMock,
  pokemonFromApiSorted,
} from '../../shared/tests/pokemon-mock';
import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;

  beforeEach(async () => {
    service = new PokemonsService(httpServiceMock as unknown as HttpService);
  });

  describe('FindOneByName', () => {
    it('should return a pokemon, based on name and ordered by abilities name asc', async () => {
      const pokemon = await service.findOnebyName('ditto');

      expect(pokemon.abilities).toStrictEqual(pokemonFromApiSorted.abilities);
      expect(httpServiceMock.axiosRef.get).toHaveBeenCalled();
      expect(httpServiceMock.axiosRef.get).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when pokemon not found', async () => {
      jest.spyOn(httpServiceMock.axiosRef, 'get').mockRejectedValue({
        response: {
          status: 404,
          statusText: 'Not Found',
        },
      });

      expect(service.findOnebyName('ditto')).rejects.toThrow(
        new NotFoundException('Pokemon not found'),
      );
    });

    it('should throw an internal error when any error occur', async () => {
      jest.spyOn(httpServiceMock.axiosRef, 'get').mockRejectedValue({
        response: {
          status: 403,
          statusText: 'Error test',
        },
      });

      expect(service.findOnebyName('ditto')).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
