import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pokemon, PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-counter-plus-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-plus-five.component.html',
  styleUrls: ['./counter-plus-five.component.css']
})
export class CounterPlusFiveComponent {


  constructor(private pokemonService: PokemonService) { }

  increment() {
    this.pokemonService.pokemon.update(value => {
      const newLevel = value.level += 1
      return {...value, level: newLevel} as Pokemon
    });
  }
}
