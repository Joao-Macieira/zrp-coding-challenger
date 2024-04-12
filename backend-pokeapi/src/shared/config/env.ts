import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  pokeBaseApi: string;
}

export const env: Env = plainToInstance(Env, {
  pokeBaseApi: process.env.POKE_API_BASE_URL,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
