import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { PokemonDetailDto } from '../../pokemon/pokemonDetailDto';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.css']
})
export class TypeDetailComponent implements OnInit {
  pokemones:PokemonDetailDto[]=[];
  servicio:PokemonService;
  ruta:ActivatedRoute;

  constructor(service:PokemonService, ruta:ActivatedRoute) {
    this.servicio = service;
    this.ruta=ruta;
  }

  getPokemons(){
    this.pokemones = this.servicio.getPokemonsByType(this.ruta.snapshot.paramMap.get("name")!);
  }
  
  ngOnInit() {
    this.getPokemons();
  }

}
