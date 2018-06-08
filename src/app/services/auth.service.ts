import { Injectable } from '@angular/core';
import {User,auth} from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  //user:Observable<firbase.User>;
  user:Observable<any>;
  constructor(private firebaseAuth:AngularFireAuth,public flashMessageService:FlashMessagesService,public router:Router) {
      this.user = firebaseAuth.authState;
   }

   signup(email:string, password:string){
     this.firebaseAuth.auth.createUserWithEmailAndPassword(email,password)
     .then(value => {
       this.router.navigate(['/']);
       this.flashMessageService.show('Signed Up Succesfully',{cssClass:'alert-success',timeout:3000});
     })
     .catch(err => {
       this.router.navigate(['/signup']);
       this.flashMessageService.show(err,{cssClass:'alert-danger',timeout:3000});
     })
   }
   

   login(email:string, password:string){
     this.firebaseAuth.auth.signInWithEmailAndPassword(email,password)
     .then(value => {
       this.router.navigate(['/']);
       this.flashMessageService.show('Welcome Back',{cssClass:'alert-success',timeout:3000});
     })
     .catch(err => {
       this.router.navigate(['/login']);
       this.flashMessageService.show(err,{cssClass:'alert-danger',timeout:3000});
     })
   }

   getAuth(){
     return this.firebaseAuth.authState.map(auth => auth);
   }

   logout(){
     this.firebaseAuth.auth.signOut();
   }
  
}
