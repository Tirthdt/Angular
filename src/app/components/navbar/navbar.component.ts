import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean;
  user:string;
  showRegister:boolean;
  constructor(
  		public router:Router,
  		public flash:FlashMessagesService,
  		public af:AuthService

  	) { }

  ngOnInit() {

  	this.af.getAuth().subscribe(auth => {
  			if(auth){
  				this.isLoggedIn = true;
  				this.user = auth.email;
  			}
  			else{
  				this.isLoggedIn = false;
  			}
  	});
  }
  onclick(){
  	this.af.logout();
    this.router.navigate(['/login']);
  	this.flash.show('Logged Out',{cssClass:'alert-primary',timeout:2000});
  	
  }

}
