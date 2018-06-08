import { Injectable } from '@angular/core';

@Injectable()
export class MarineService {

  constructor() { }
  public Marine:Object[] = [
  		{
  			name:'Neon Tetra',
  			src:'../../assets/marine/neon.jpg'
  		},
  		{
  			name:'Danios',
  			src:'../../assets/marine/danios.jpg'
  		},
  		{
  			name:'Cherry Barb',
  			src:'../../assets/marine/Cherry_Barb.jpg'
  		},
  		{
  			name:'Guppies',
  			src:'../../assets/marine/guppies.jpg'
  		},
  		{
  			name:'Kuhli Loach',
  			src:'../../assets/marine/Kuhli_loach.jpg'
  		},
  		{
  			name:'Pearl Gourami',
  			src:'../../assets/marine/Pearl_Goarami.jpg'
  		},
  		{
  			name:'Turtle',
  			src:'../../assets/marine/turtle.jpg'
  		},
  		{
  			name:'Platies',
  			src:'../../assets/marine/platies.jpg'
  		},
  		{
  			name:'Mollies',
  			src:'../../assets/marine/mollies.jpg'
  		}
  ];
  getMarineList(){
  	return this.Marine;
  }
}
