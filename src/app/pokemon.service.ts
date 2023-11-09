import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {


  pokemon = new PokemonSignal()

  constructor(private httpClient: HttpClient) { }

  getPokemon() {
    const randomId = Math.floor(Math.random() * 100) + 1;
    this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .subscribe((response: any) => {
        const pokemon: Pokemon = new Pokemon(
          response.id,
          response.name,
          response.base_experience,
          response.sprites.front_default
      );
        this.pokemon.initialize(pokemon);
      });
  }
}

export class PokemonSignal {
  signal = signal({} as Pokemon);

  gainExperience(experience: Number) {
    this.signal.update(value => {
       return value.gainExperience(experience);
    });
  }

  initialize(pokemon: Pokemon) {
    this.signal.set(pokemon);
  }

  get id() {
    return this.signal().id
  }

  get name() {
    return this.signal().name
  }

  get level() {
    return this.signal().level
  }

  get image() {
    return this.signal().image
  }
}

export class Pokemon {
  id: string;
  name: string;
  level: string;
  image: string;


  constructor(id: string, name: string, level: string, image: string) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.image = image;
  }

  gainExperience(experience: Number): Pokemon {
    const newLevel = Number(this.level) + Number(experience);
    return Pokemon.updateLevel(this, newLevel);
  }


  private static updateLevel(pokemon: Pokemon, newLevel: number) {
    return new Pokemon(pokemon.id, pokemon.name, newLevel.toString(), pokemon.image);
  }
}
