import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Pokemon } from 'src/_model/pokemon';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  
  public pokemons = new ReplaySubject<Pokemon[]>(1)

  constructor(private httpClient:HttpClient) { 
    let url='https://pokeapi.co/api/v2/pokemon/'
    this.httpClient.get<any>(url).pipe(
      map(value=>value.results)
    ).subscribe(data=>this.pokemons=data.results);
  }

}
