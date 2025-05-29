import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule], //need to import FormsModule to use 2 way binding
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //Need to dependency inject Router and HttpClient
  constructor(private router:Router, private http:HttpClient, private authService:AuthService){}

  //Username and Password variable to store user input and attempt to login
  public username:string = ""
  public password:string = ""

  loginHttp(){
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          console.log("Login success for " + response.username + " with role " + response.role)

          //set the user info in the service
          this.authService.loggedInUser = response

          //switch the component to home
          this.router.navigateByUrl("/home")
        },
        error: (error) => {
          alert("Username or Password are incorrect")
        }
      })
  }

  // loginHardcoded(){
  //   if(this.username === "username" && this.password === "password"){
  //     this.router.navigateByUrl("/home")
  //   } else {
  //     alert("Username or Password is incorrect!")
  //   }
  // }

}
