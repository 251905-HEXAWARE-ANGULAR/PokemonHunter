import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catch',
  imports: [CommonModule],
  templateUrl: './catch.component.html',
  styleUrl: './catch.component.css'
})
export class CatchComponent {

  //TODO: Make this an Array of 4 pokemon
  //For now, here's an array that will store our Pikachu
  pokeArray:Pokemon[] = []

  //constructor inject the PokemonService so we can use the get pokemon method
  constructor(public pokemonService:PokemonService){}

  //ngOnInit - this is a component lifecycle method that runs some code block when the component renders (in other "on initialization")
  ngOnInit(){
    this.getPokemon()
  }

  //Getting Pokemon from PokeAPI to render on the page
  getPokemon(){

    if(this.pokeArray.length !== 0){
      this.pokeArray.length = 0
    }

    //When we get an Observable, we have t0 SUBSCRIBE to it to get the newest incoming data
    //Once we subscribe, we can push the extracted data into whatever variable/function it needs to be used in
    for(let i = 0; i < 4; i++){
      this.pokemonService.getRandomPokemon().subscribe(data => {
          console.log(data)
          //push the pokemon data into our Array (pokeArray)
          this.pokeArray.push(data)
          console.log(this.pokeArray)
        })
    }
  }

  //Generates a random positional style 
  //(This will get applied for each render pokemon)
  getRandomPosition(){
    const randomTop = Math.floor(Math.random() * 50 + 20) + '%'
    const randomLeft = Math.floor(Math.random() * 50) + '%'

    //return a style - we'll use this in the HTML with [ngStyle] - an attribute directive!
    return {
      position: "absolute",
      top: randomTop,
      left: randomLeft
    }
  }


  //Catch a Pokemon (remove the pokemon from this Array, and push it into the PokemonService array)
  catchPokemon(pokemon:Pokemon){

    //push the pokemon into the Service Array (caughtPokemon)
    this.pokemonService.caughtPokemon.push(pokemon)

    //remove the caught pokemon from the array (taking it out of the user's view)
    this.pokeArray.splice(this.pokeArray.indexOf(pokemon), 1)
    //1? this means delete one element starting from the found index

    //TODO: This is a "side effect" of catching a pokemon
    //TODO: We could have used a Signal attached to some message variable to get this display through an effect instead (as well other stuff)
    alert(pokemon.name + " was caught!")

  }

}
