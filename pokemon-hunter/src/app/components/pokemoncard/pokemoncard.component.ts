import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemoncard',
  imports: [],
  templateUrl: './pokemoncard.component.html',
  styleUrl: './pokemoncard.component.css'
})
export class PokemoncardComponent {

  //@Input() to take incoming data from the parent component
  @Input() pokemon!:Pokemon

  //"!" to tell the compiler "stop yelling at us, we WILL supply a value for this variable at compile time" 

}
