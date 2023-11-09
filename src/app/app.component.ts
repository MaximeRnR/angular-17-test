import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {CounterPlusFiveComponent} from "./counter-plus-five/counter-plus-five.component";
import {CounterPlusOneComponent} from "./counter-plus-one/counter-plus-one.component";
import {PokemonService} from "./pokemon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CounterPlusFiveComponent,
    CounterPlusOneComponent,
    NgIf
  ],
  standalone: true
})
export class AppComponent implements OnInit{
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
