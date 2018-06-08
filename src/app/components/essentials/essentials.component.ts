import { Component, OnInit } from '@angular/core';
import { EssentialService } from '../../services/essential.service';
@Component({
  selector: 'app-essentials',
  templateUrl: './essentials.component.html',
  styleUrls: ['./essentials.component.css']
})
export class EssentialsComponent implements OnInit {

 public Essentials:Object[];
  constructor(public essentialService:EssentialService) { 
  		this.Essentials = this.essentialService.getEssentials();
  }

  ngOnInit() {
  }

}
