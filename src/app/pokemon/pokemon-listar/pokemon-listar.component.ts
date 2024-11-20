import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {

  pokemones:PokemonDetailDto[]=[];
  servicio:PokemonService;
  selected:boolean=false;
  selectedPokemon!:PokemonDetailDto;

  constructor(servicio:PokemonService) {
    this.servicio = servicio;
   }

  getPokemons(){
    this.pokemones = this.servicio.getPokemons();
  }

  selectPokemon(pokemon:PokemonDetailDto){
    this.selectedPokemon = pokemon;
    this.selected = true}

  ngOnInit() {
    this.getPokemons();
  }

}
