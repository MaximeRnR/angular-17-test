import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {


  pokemon = signal({} as Pokemon);

  constructor(private httpClient: HttpClient) { }

  getPokemon() {
    const randomId = Math.floor(Math.random() * 100) + 1;
    this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .subscribe((response: any) => {
        const pokemon: Pokemon = {
          id: response.id,
          name: response.name,
          level: response.base_experience,
          image: response.sprites.front_default
        };
        this.pokemon.set(pokemon);
      });
  }
}

export interface Pokemon {
  id: string;
  name: string;
  level: string;
  image: string;
}
