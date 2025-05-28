import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule], //need to import FormsModule to use 2 way binding
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //Need to dependency inject Router and HttpClient
  constructor(private router:Router, private http:HttpClient){}

  //Username and Password variable to store user input and attempt to login
  public username:string = ""
  public password:string = ""

  //TODO: loginHTTP()

  loginHardcoded(){
    if(this.username === "username" && this.password === "password"){
      this.router.navigateByUrl("/home")
    } else {
      alert("Username or Password is incorrect!")
    }
  }

}
