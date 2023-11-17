import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.css'
})
export class PokemonTeamComponent {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
  }

  addPokemon() {
    this.pokemons.push(this.pokemonService.pokemon.signal());
  }
}
