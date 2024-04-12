export interface Abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: false;
  slot: 1;
}

export class Pokemon {
  id: string;
  abilities: Abilities[];
  name: string;
  sprites: {
    front_default: string;
  };
}
