import { Component } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';
import { Type } from 'src/_model/type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})



export class PokemonListComponent{

  public Pokemons:Pokemon[] = [
    {
      image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      number:1,
      types:[Type.Poison,Type.Grass],
      name:"Bulbasaur"
    },
    {
      image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
      number:2,
      types:[Type.Poison,Type.Grass],
      name:"Ivysaur"
    },
    {
      image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      number:4,
      types:[Type.Fire],
      name:"Charmander"
    }
  ]

}




