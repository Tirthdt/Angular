import { Injectable } from '@angular/core';

@Injectable()
export class LogoService {

  constructor() { }
  public logo:any[] = [
  	{
  		   name:'Cats',
      	 src:'../../assets/logos/cat.png'
  	},
  	{
  		 name:'Dogs',
      	 src:'../../assets/logos/dog.png'
  	},
  	{
  		 name:'Fish',
      	 src:'../../assets/logos/fish.png'
  	},
  	{
  		 name:'Shop',
      	 src:'../../assets/logos/cart.png'
  	}

  ];
  getLogoInfo(){
  	return this.logo;
  }

}
