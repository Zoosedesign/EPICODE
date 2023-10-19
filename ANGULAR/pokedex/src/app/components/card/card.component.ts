import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pagination } from 'src/app/models/pagination.interface';
import { Pokemons } from 'src/app/models/pokemons.interface';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  pokemons: Pokemon[] = []

  constructor(private PokemonSrv: PokemonService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    this.PokemonSrv.get<Pagination>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(data => {
      const pokemonsUrl: Pokemons[] = data.results;
      pokemonsUrl.forEach(pokemonUrl => {
        this.PokemonSrv.get<Pokemon>(pokemonUrl.url).subscribe(pokemon => {
          this.pokemons.push(pokemon);
        })
      });
      console.log(this.pokemons)
    })
  }
}
