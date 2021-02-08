import { Component, OnInit } from '@angular/core';
import { Employee } from '../_models/employee';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
 emp :Employee[];
  constructor() { }
 

  ngOnInit() {
    this.getDetails();
  }
 getDetails(){
   this.emp=[
   {'id':101,'Name': "Murali" ,'age':22},
   {'id':102,'Name': "Krishna" ,'age':21},
   {'id':103,'Name': "vamsi" ,'age':21},
   ];
 }
}
