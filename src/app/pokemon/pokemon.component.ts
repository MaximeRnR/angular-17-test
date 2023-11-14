import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {CounterPlusFiveComponent} from "../counter-plus-five/counter-plus-five.component";
import {CounterPlusOneComponent} from "../counter-plus-one/counter-plus-one.component";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, CounterPlusFiveComponent, CounterPlusOneComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{


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
