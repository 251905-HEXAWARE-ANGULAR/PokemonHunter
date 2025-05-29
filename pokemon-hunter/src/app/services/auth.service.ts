import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //This Service could contain more than just the login() and user details
  //Registration? Alternate Login methods? Auth tokens like a JWT? Request Header objects?

  constructor(private http:HttpClient) { }

  //Being lazy, not making a User Interface
  public loggedInUser:any = {} //this will get populated after login

  login(username:string, password:string): Observable<any> {
    return this.http.post("http://localhost:8080/auth", {username, password})
  }

}
