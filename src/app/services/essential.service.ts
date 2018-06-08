import { Injectable } from '@angular/core';


@Injectable()
export class EssentialService {

  public Essentials:Object[] = [
    {
      name:'Pedigree Adult',
      src:'../../assets/essentials/pedigreeA.jpg'
    },
    {
      name:'Choostix',
      src:'../../assets/essentials/choostix.jpg'
    },
    {
      name:'Steel Bowl',
      src:'../../assets/essentials/bowl.jpg'
    },
    {
      name:'Cat Food',
      src:'../../assets/essentials/Cat_Food.jpg'
    },
    {
      name:'Cat Toy',
      src:'../../assets/essentials/Cat_Toy.jpg'
    },
    {
      name:'Pet Bed',
      src:'../../assets/essentials/Pet_Bed.jpg'
    },
    {
      name:'Fish Food',
      src:'../../assets/essentials/Fish_Food.jpg'
    },
    {
      name:'Turtle Food',
      src:'../../assets/essentials/Turtle_Food.jpg'
    },
    {
      name:'Aquarium',
      src:'../../assets/essentials/Aquarium.jpg'
    }
    
    

  ];
   

  constructor() { }

  getEssentials(){
    return this.Essentials;
  }

}
