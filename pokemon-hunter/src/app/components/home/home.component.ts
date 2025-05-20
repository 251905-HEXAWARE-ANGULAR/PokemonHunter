import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Defining a constructor and injecting the PokemonService so we can access its variable and functions
  constructor(public pokemonService:PokemonService){}

}
