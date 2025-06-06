import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemoncard',
  imports: [TitleCasePipe],
  templateUrl: './pokemoncard.component.html',
  styleUrl: './pokemoncard.component.css'
})
export class PokemoncardComponent {

  //@Input() to take incoming data from the parent component
  @Input() pokemon!:Pokemon

  //"!" to tell the compiler "stop yelling at us, we WILL supply a value for this variable at compile time" 

//Just showing ngOnChanges in action - this invokes every time @Input pokemon changes

  // ngOnChanges(){
  //   alert("pokemon @Input changed")
  // }

}
