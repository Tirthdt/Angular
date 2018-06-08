import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public af:AuthService,public route:Router){

  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.getAuth().map(auth =>{
    	if(!auth){
    		this.route.navigate(['/login']);
    		return false;
    	}
    	else{
    		return true;
    	}
    })
  }
}
