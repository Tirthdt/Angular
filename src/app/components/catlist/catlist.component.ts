import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {

  Cats:Object[];
  constructor(public catService:CatService) {
    this.Cats = this.catService.getCats();
   }

   

  ngOnInit() {
  }
  

}
