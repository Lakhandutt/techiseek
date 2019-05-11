import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PhonesComponent } from './Components/phones/phones.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';
import { TechiseekComponent } from './Components/techiseek/techiseek.component';
import { AdminloginComponent } from './AdminComponents/adminlogin/adminlogin.component';
import { AdminComponent } from './AdminComponents/admin/admin.component';

const routes: Routes = [
  {
    path: 'techISeek', component: TechiseekComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'phones', component: PhonesComponent },
      { path: 'laptops', component: LaptopsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  { path: 'adminLogIn', component: AdminloginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'techISeek', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
