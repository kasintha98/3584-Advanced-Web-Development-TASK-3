import { Routes } from '@angular/router';
import { MyDashboard } from './dashboard/my-dashboard/my-dashboard';
import { Home } from './home/home';
import { AgeCalcComponent } from './age-calc/age-calc.component';
import { Login } from './login/login';
import { Weather } from './weather/weather';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'dashboard', component: MyDashboard},
    {path: 'home', component: Home},
    {path: 'age-calc', component: AgeCalcComponent},
    {path: 'login', component: Login},
    {path: 'weather', component: Weather},
    {path: '**', redirectTo: 'home' }
];
