package com.revature.PokemonHunterBackEnd.controllers;

import com.revature.PokemonHunterBackEnd.models.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController //Makes the class a bean, formats all response data as JSON
@RequestMapping("/auth") //All HTTP Requests ending in /auth will be routed to this controller
@CrossOrigin//Allows requests from any origin (like our Angular app)
public class AuthController {

    //We would @autowire a Service here, but we're just hardcoding user creds in the controller

    //login - hardcoded, takes a Post request and a User object as a param
    @PostMapping
    public ResponseEntity<User> login(@RequestBody User user, HttpSession session) {

        //hardcoded login check - would actually be a call to the Service
        if(!user.getUsername().equals("username") || !user.getPassword().equals("password")){
            //login failed! send a failure message
            return ResponseEntity.status(401).build();
        }

        //If we get here, login succeeded

        //Build a hardcoded User to send back to the front end
        User loggedInUser = new User("admin", "password", "Ash", 1);

        //Now that we have a User, we can store it in the session
        session.setAttribute("user", loggedInUser); //storing the entire User object
        session.setAttribute("userId", loggedInUser.getUserId()); //or we could store individual attributes

        //get and print these attributes
        System.out.println("User Object: " + session.getAttribute("user"));
        System.out.println("User ID: " + session.getAttribute("userId"));

        //Why store this stuff in a Session?
            //We can use it later in requests that need the User info (Id? Role?)
            //We can use it for security (check that role.equals("admin") before doing some admin action)
            //Return stored User information to the front end, instead of having to go to the DB

        //Let's return the logged in User to the front end
        return ResponseEntity.ok(loggedInUser); //200 OK with the User object in the body

    }

}
