import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    public flashmessagesService:FlashMessagesService,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email,password);
        
  }

}