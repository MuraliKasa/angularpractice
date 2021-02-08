import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../_contracts/iemployee';
import { ListService } from '../_service/list.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  employee:Iemployee[];
  constructor( private service :ListService) { }

  ngOnInit() {
    this.getemployeefromjson();
  }
  getemployeefromjson()
  {
    return this.service.getDetailsFromJson().subscribe(data=>this.employee=data);
  }
}
