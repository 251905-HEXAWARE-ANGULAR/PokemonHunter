package com.revature.PokemonHunterBackEnd.models;

//This class will help us "model" and transfer User data
//I'd annotate this up if we were dealing a DB...
//...since this would probably be related to a "users" table
public class User {

    private int userId;
    private String username;
    private String password;
    private String role;

    public User() {
    }

    //This all args constructor will get sent to the front end after log in
    public User(String role, String password, String username, int userId) {
        this.role = role;
        this.password = password;
        this.username = username;
        this.userId = userId;
    }

    //This constructor will be used when a User tries to log in
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
