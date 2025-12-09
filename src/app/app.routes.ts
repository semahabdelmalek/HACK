import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListeClubsComponent } from './components/liste-clubs/liste-clubs.component';
import { ListeEventComponent } from './components/liste-event/liste-event.component';
import { ListeNewsComponent } from './components/liste-news/liste-news.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddNewsComponent } from './components/add-news/add-news.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"club",component:ListeClubsComponent},
    {path:"events",component:ListeEventComponent},
    {path:"news",component:ListeNewsComponent},
    {path:"addClub",component:AddClubComponent},
    {path:"addEvent",component:AddEventComponent},
    {path:"addNews",component:AddNewsComponent}
];
