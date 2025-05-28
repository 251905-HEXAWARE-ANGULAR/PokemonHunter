import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatchComponent } from './components/catch/catch.component';
import { LoginComponent } from './components/login/login.component';

//This Class is responsible for setting up ROUTING
//We establish what component is rendered at what URL by making objects in the routes array
export const routes: Routes = [
    {
        path:"", //empty path = login
        component:LoginComponent
    },
    {
        path:"home", //when the URL ends in /home...
        component:HomeComponent //Render the HomeComponent!
    },
    {
        path:"catch",
        component:CatchComponent
    }
];
