import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ProjekcijaComponent } from './projekcija/projekcija.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TicketComponent } from './ticket/ticket.component';
import { SignupComponent } from './signup/signup.component';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path: 'search', component: SearchComponent},
    {path: 'projekcija/:id/order', component: TicketComponent},
    {path: 'projekcija', component: ProjekcijaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: ''}
];
