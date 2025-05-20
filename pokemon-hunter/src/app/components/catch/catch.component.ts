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

  getPokemon(){

    //When we get an Observable, we have t0 SUBSCRIBE to it to get the newest incoming data
    //Once we subscribe, we can push the extracted data into whatever variable/function it needs to be used in
    this.pokemonService.getRandomPokemon().subscribe(data => {
      console.log(data)
      //push the pokemon data into our Array (pokeArray)
      this.pokeArray.push(data)

      console.log(this.pokeArray)
    })

  }

}
