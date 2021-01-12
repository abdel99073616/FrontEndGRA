import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmpComponent} from './emp/emp.component';
import {DepComponent} from './dep/dep.component';

const routes: Routes = [
  {path:'employee',component:EmpComponent},
  {path:'department',component:DepComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
