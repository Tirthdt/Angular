import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(){
  	firebase.initializeApp(
  		{apiKey: "AIzaSyB-aMQrZGIG0TRS7fH4D_AbluPj4Q65f1c",
    authDomain: "sample-b0ffe.firebaseapp.com",
    databaseURL: "https://sample-b0ffe.firebaseio.com",
    projectId: "sample-b0ffe",
    storageBucket: "sample-b0ffe.appspot.com",
    messagingSenderId: "100404234294"}
  	)
  }
}
