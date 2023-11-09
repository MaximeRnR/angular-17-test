import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pokemon, PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-counter-plus-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-plus-one.component.html',
  styleUrls: ['./counter-plus-one.component.css']
})
export class CounterPlusOneComponent {


  constructor(private pokemonService: PokemonService) { }

  increment() {
    this.pokemonService.gainExperience(1);
  }
}
