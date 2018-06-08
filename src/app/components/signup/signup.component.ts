import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,public authService:AuthService,public flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
      this.authService.signup(email,password);
    }
}
