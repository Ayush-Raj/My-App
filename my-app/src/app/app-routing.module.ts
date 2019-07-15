import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContactListComponent} from './contact-list/contact-list.component';
const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'contact' , component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
