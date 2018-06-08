import { Component, OnInit } from '@angular/core';
import { LogoService } from '../../services/logo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logos:any[];
  constructor(public logoService:LogoService) { 
  		this.logos = this.logoService.getLogoInfo();
  }
  
  

  showComponent: boolean[] = [true,false,false,false];

  ngOnInit() {
  }
  myMethod(e,i){
  	console.log(event);
  	
  	for(let j=0;j<this.showComponent.length;j++){
  		if(j==i){
        if(this.showComponent[j] == true){
          continue;
        }else{
  			this.showComponent[j] = !this.showComponent[j];
      }
  		}
  		else{
  			
        this.showComponent[j] = false;
  		}
  	}
	
  }

}
