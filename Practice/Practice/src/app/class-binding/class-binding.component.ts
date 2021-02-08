import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  Sucess = "class-Sucess";
  danger = "class-Danger";
  primary = "class-Primary";
  constructor() { }
   Execution={
   'class-Sucess' : true,
   'class-Primary':true

   };
  ngOnInit() {
  }

}
