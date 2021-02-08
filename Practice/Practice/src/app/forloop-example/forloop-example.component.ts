import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop-example',
  templateUrl: './forloop-example.component.html',
  styleUrls: ['./forloop-example.component.css']
})
export class ForloopExampleComponent implements OnInit {
  PersonList = ["Murali","Krishna","Vamsi","Ganesh","Dharma"];
  constructor() { }

  ngOnInit() {
  }

}
