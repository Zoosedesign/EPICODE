import { Pokemons } from "./pokemons.interface"

export interface Pagination {
  count: number,
  next: string,
  previous: null,
  results: Pokemons[]
}
