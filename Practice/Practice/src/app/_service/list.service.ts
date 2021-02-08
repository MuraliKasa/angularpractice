import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee';
import { empty, Observable } from 'rxjs';
import { Iemployee } from '../_contracts/iemployee';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url:string = '/assets/data/employee.json';
 employee:Employee[];
  constructor(private http:HttpClient) { }
  getAllDeatils():Employee[]{
  this.employee=[
    {'id':1001,'Name':"Murali",'age':22},
    {'id':1002,'Name':"ganesh",'age':21},
    {'id':1003,'Name':"krishna",'age':23},
    {'id':1004,'Name':"Vamsi",'age':2}
  ];
  return this.employee;
  }
  getDetailsFromJson() : Observable<Iemployee[]>{
        return  this.http.get<Iemployee[]>(this.url);
       
        
  }
}
