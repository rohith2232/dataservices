import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';
import { ColorComponent } from './color/color.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'color', component:ColorComponent},
  {path:'user', component:UserComponent},
  {path:'country', component:CountryComponent},
  {path:'**', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
