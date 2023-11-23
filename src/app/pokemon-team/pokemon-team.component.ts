import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Pokemon, PokemonService} from '../pokemon.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.css'
})
export class PokemonTeamComponent implements OnInit {

  pokemons: Pokemon[] = [];
  allPokemons: Pokemon[] = [];

  loading = false;

  constructor(private pokemonService: PokemonService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
    .subscribe((response: any) => {
      this.allPokemons = response.results;
      this.loading = false;
    });
  }

  addPokemon() {
    this.pokemons.push(this.pokemonService.pokemon.signal());
  }
}
