import {Component} from '@angular/core';
import {PokemonComponent} from "./pokemon/pokemon.component";
import {PokemonService} from "./pokemon.service";
import {PokemonTeamComponent} from "./pokemon-team/pokemon-team.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    PokemonComponent,
    PokemonTeamComponent
  ],
  standalone: true
})
export class AppComponent{
  title = 'angular-signals';

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemon();
  }

  pokemon = this.pokemonService.pokemon

  randomPokemon() {
    this.pokemonService.getPokemon()
  }
}
