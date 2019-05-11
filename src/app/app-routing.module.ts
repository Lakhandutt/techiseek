import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PhonesComponent } from './Components/phones/phones.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
