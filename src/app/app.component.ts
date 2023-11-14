import {Component} from '@angular/core';
import {PokemonComponent} from "./pokemon/pokemon.component";
import {PokemonService} from "./pokemon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    PokemonComponent
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
