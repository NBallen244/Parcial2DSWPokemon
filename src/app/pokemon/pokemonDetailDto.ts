import { TypesDto } from "../type/typeDto";

export class PokemonDetailDto{
    id: number;
    height: number;
    weight: number;
    name: string;
    abilities : Array<AbilityDto>
    sprites : SpriteDto
    types: Array<TypesDto>


    constructor(id: number, height: number, weight: number, name: string, abilities: Array<AbilityDto>, sprites: SpriteDto, types: Array<TypesDto>) {
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.abilities = abilities;
        this.sprites = sprites;
        this.types = types;
    }
}


export class AbilityDto {
  ability: AbilitiesDetailDto;
  is_hidden: boolean;
  slot: number;
  constructor(ability: AbilitiesDetailDto, is_hidden: boolean, slot: number) {
    this.ability = ability;
    this.is_hidden = is_hidden;
    this.slot = slot;
  }
}
export class AbilitiesDetailDto {
  name : string;
  url : string;

  constructor(name: string, url: string ) {
    this.name = name;
    this.url = url;
  }
}

export class SpriteDto {
  front_default : string;
  front_female: string;
  front_shiny: string;
  front_shiny_female : string;

  constructor(front_default: string, front_female: string, front_shiny: string, front_shiny_female: string) {
    this.front_default = front_default;
    this.front_female = front_female;
    this.front_shiny = front_shiny;
    this.front_shiny_female = front_shiny_female;
  }
}

export class ConteoDto {
  tipo:string;
  conteo:number;

  constructor(tipo: string, conteo: number) {
    this.tipo = tipo;
    this.conteo = conteo;
  }
}
