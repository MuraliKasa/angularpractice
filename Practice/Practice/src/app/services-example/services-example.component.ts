import { Component, OnInit } from '@angular/core';
import { Employee } from '../_models/employee';
import { ListService } from '../_service/list.service';

@Component({
  selector: 'app-services-example',
  templateUrl: './services-example.component.html',
  styleUrls: ['./services-example.component.css']
})
export class ServicesExampleComponent implements OnInit {
 employee :Employee[];
  constructor(public empservices :ListService) { }

  ngOnInit() {
    this.getemployee();
  }
    getemployee(){
          this.employee=this.empservices.getAllDeatils();
    }
}
