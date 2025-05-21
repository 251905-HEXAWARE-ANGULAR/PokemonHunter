import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //Array to hold our list of caught Pokemon
  //TODO: this will be an array of Pokemon objects later
  public caughtPokemon:string[] = [] 

  //Inject the HttpClient Library so we can make HTTP requests 
  constructor(private http:HttpClient) { }

  //Method to fetch one random pokemon
 //TODO: this is harcoded to pikachu for now
  getRandomPokemon():Observable<Pokemon> {
    
    /* send an HTTP GET request to the pokeAPI, and convert the data into a Pokemon object 
    We'll use the .pipe() method to transform the incoming data into our Pokemon object 
    we'll use the map() method to take the data and fit it into our Pokemon fields*/
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/pikachu").pipe(
      map(data => ({
        id:data.id,
        name:data.name,
        sprite:data.sprites.front_default
      }))
      //THIS^ is our Pokemon object we're returning based off the PokeAPI data
    )


  }
 
}
