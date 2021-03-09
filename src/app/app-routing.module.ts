import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MomentlistComponent } from './momentlist/momentlist.component';
import { AddmomentComponent } from './addmoment/addmoment.component';

const routes: Routes = [
  { path :  'signup', component : SignUpComponent },
  { path : 'signin' , component : SignInComponent },
  { path : 'addmoment' , component :  AddmomentComponent},
  { path : 'momentlist' , component : MomentlistComponent},
  { path :  '', component : SignUpComponent },
  { path :  '*', component : SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
