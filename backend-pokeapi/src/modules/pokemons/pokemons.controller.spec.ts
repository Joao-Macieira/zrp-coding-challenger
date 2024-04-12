import { HttpService } from '@nestjs/axios';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  httpServiceMock,
  pokemonFromApiSorted,
} from '../../shared/tests/pokemon-mock';
import { PokemonsController } from './pokemons.controller';
import { PokemonsModule } from './pokemons.module';
import { PokemonsService } from './pokemons.service';

describe('PokemonsController', () => {
  let controller: PokemonsController;
  let service: PokemonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PokemonsModule],
    }).compile();

    controller = module.get<PokemonsController>(PokemonsController);
    service = new PokemonsService(httpServiceMock as unknown as HttpService);

    controller['pokemonsService'] = service;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(controller['pokemonsService']).toBeInstanceOf(PokemonsService);
  });

  describe('FindOneByName', () => {
    it('should return a pokemon, based on name and ordered by abilities name asc', async () => {
      const pokemon = await controller.findOneByName('ditto');

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

      expect(controller.findOneByName('ditto')).rejects.toThrow(
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

      expect(controller.findOneByName('ditto')).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
