import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    
    /* send an HTTP GET request to the pokeAPI, and convert the data into a Pokemon object */
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu")

    //TODO: need to use pipe() to convert the incoming pokemon data into our version of a Pokemon (the Pokemon interface)

  }
 
}
