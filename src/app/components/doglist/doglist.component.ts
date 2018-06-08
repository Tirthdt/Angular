import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css']
})
export class DoglistComponent implements OnInit {

  Dogs:Object[];
  constructor(public dogService:DogService) {
  this.Dogs=this.dogService.getDogs(); 
	}

  ngOnInit() {
  }

}
