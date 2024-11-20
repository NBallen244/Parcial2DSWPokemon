import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailDto, ConteoDto } from './pokemonDetailDto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl : string = "https://pokeapi.co/api/v2/pokemon/";
  pokemones:PokemonDetailDto[] = [];
  conteos:ConteoDto[] = []; 

  constructor(private http : HttpClient) { }

  getPokemons(): PokemonDetailDto[] {
    let pokemons : PokemonDetailDto[] = [];
    for (let i = 1; i <= 20; i++) {
      this.getPokemon(i.toString()).subscribe((pokemon) => {
        pokemons.push(pokemon);
      });
    }
    this.pokemones = pokemons;
    return pokemons;
  }

  getPokemon(id : string): Observable<PokemonDetailDto> {
    return this.http.get<PokemonDetailDto>(`${this.apiUrl}${id}`);
  }

  getPokemonsByType(type:string):PokemonDetailDto[]{
    let pokemonesTipo:PokemonDetailDto[] = [];
    this.pokemones.forEach(pokemon => {
      pokemon.types.forEach(tipo => {
        if(tipo.type.name == type){
          pokemonesTipo.push(pokemon);
        }});
    });
    let contador:ConteoDto=new ConteoDto(type, pokemonesTipo.length);
    this.conteos.push(contador);
    return pokemonesTipo;
  }

  getConteos():ConteoDto[]{
    return this.conteos;
  }

}
