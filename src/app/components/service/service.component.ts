import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  
  show:boolean[] = [false,false,false];
  
  ngOnInit() {
  }

  onClickShow(n:number){
  	this.show[n] = !this.show[n];
  }


}
