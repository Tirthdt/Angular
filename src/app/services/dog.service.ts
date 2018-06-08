import { Injectable } from '@angular/core';

@Injectable()
export class DogService {

	public dogs:Object[] = [
    {
      name:'Indian Pariah',
      src:'../../assets/dogs/IndianP.jpg'
    },
    {
      name:'RajaPalayam',
      src:'../../assets/dogs/raja.jpg'
    },
    {
      name:'Tibetian Mastiff',
      src:'../../assets/dogs/tibetian.jpg'
    },
    {
      name:'Combai',
      src:'../../assets/dogs/combai.jpg'
    },
    {
      name:'Bully',
      src:'../../assets/dogs/bully.jpg'
    },
    {
      name:'Indian Splitz',
      src:'../../assets/dogs/IndianS.jpg'
    },
    {
      name:'Gaddi',
      src:'../../assets/dogs/gaddi.jpg'
    },
    {
      name:'Pandikona',
      src:'../../assets/dogs/pandikona.jpg'
    },
    {
      name:'Pug',
      src:'../../assets/dogs/pug.jpg'
    }
    
    

  ];

  constructor() { }

  public getDogs(){
    return this.dogs;
  }

}
