import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AluLoginComponent } from './alu-login/alu-login.component';

import { RegisterComponent } from './register/register.component';
import { ViewentsComponent } from './viewents/viewents.component';


const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"alu-login",Component:AluLoginComponent},
  {path:"viewevents",Component:ViewentsComponent},
  { path: '',   redirectTo: 'register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
