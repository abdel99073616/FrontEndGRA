import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path: 'index' , component: IndexComponent},
  {path: 'login' , component: LoginComponent },
  {path: 'home' , component: HomeComponent},
  {path: 'register' , component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
