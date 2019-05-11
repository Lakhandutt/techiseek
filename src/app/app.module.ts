import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

//angular material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


//components imported
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';
import { PhonesComponent } from './Components/phones/phones.component';

//firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { TechiseekComponent } from './Components/techiseek/techiseek.component';
import { AdminComponent } from './AdminComponents/admin/admin.component';
import { AdminloginComponent } from './AdminComponents/adminlogin/adminlogin.component';
import { PhonesFormComponent } from './AdminComponents/phones-form/phones-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidenavComponent,
    LaptopsComponent,
    PhonesComponent,
    AdminComponent,
    AdminloginComponent,
    TechiseekComponent,
    PhonesFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
