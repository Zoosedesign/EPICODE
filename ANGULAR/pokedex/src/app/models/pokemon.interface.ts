export interface PokemonType {
  slot: 1;
  type: {
    name: string;
    url: string;
  }
}

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
}
