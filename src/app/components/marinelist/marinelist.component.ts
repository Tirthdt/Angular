import { Component, OnInit } from '@angular/core';
import { MarineService } from '../../services/marine.service';
@Component({
  selector: 'app-marinelist',
  templateUrl: './marinelist.component.html',
  styleUrls: ['./marinelist.component.css']
})
export class MarinelistComponent implements OnInit {

  public Marine:Object[];
  constructor(public marineService:MarineService) {
  		this.Marine = this.marineService.getMarineList();
   }

  ngOnInit() {
  }

}
