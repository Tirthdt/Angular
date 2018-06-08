import { Injectable } from '@angular/core';


@Injectable()
export class CatService {

  public cats:Object[] = [
    {
      name:'Abyssinian cat',
      src:'../../assets/cats/abyssinian.jpg'
    },
    {
      name:'American Bobtail',
      src:'../../assets/cats/american.jpg'
    },
    {
      name:'American Curl',
      src:'../../assets/cats/americanc.jpg'
    },
    {
      name:'American Shorthair',
      src:'../../assets/cats/amricans.jpg'
    },
    {
      name:'American WireHair',
      src:'../../assets/cats/americanw.jpg'
    },
    {
      name:'Balinese cat',
      src:'../../assets/cats/balinese.jpg'
    },
    {
      name:'Bengal cat',
      src:'../../assets/cats/bengal.jpg'
    },
    {
      name:'Birman cat',
      src:'../../assets/cats/birman.jpg'
    },
    {
      name:'Bombay cat',
      src:'../../assets/cats/bombay.jpg'
    }
    
    

  ];
   

  constructor() { }

  getCats(){
    return this.cats;
  }

}
