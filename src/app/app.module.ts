import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

//import * as firebase from 'firebase';

//Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CatlistComponent } from './components/catlist/catlist.component';
import { DoglistComponent } from './components/doglist/doglist.component';
import { MarinelistComponent } from './components/marinelist/marinelist.component';
import { EssentialsComponent } from './components/essentials/essentials.component';
import { ContactComponent } from './components/contact/contact.component';

//Services Imports
import { CatService } from './services/cat.service';
import { AuthService } from './services/auth.service';
import { LogoService } from './services/logo.service';
import { DogService } from './services/dog.service';
import { MarineService } from './services/marine.service';
import { EssentialService } from './services/essential.service';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { AuthGuard } from './auth.guard';


//Router variable
const appRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'ContactUs',component:ContactComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'service',component:ServiceComponent,canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CatlistComponent,
    DoglistComponent,
    MarinelistComponent,
    EssentialsComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [CatService, AuthService,LogoService,DogService,MarineService,EssentialService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
