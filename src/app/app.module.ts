import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { ShowEmpComponent } from './emp/show-emp/show-emp.component';
import { DepComponent } from './dep/dep.component';
import { ShowDepComponent } from './dep/show-dep/show-dep.component';
import { AddEditEmpComponent } from './emp/add-edit-emp/add-edit-emp.component';
import {SharedService} from './shared.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEditDepComponent } from './dep/add-edit-dep/add-edit-dep.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    ShowEmpComponent,
    DepComponent,
    ShowDepComponent,
    AddEditEmpComponent,
    AddEditDepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
