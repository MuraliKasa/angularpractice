import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-example',
  templateUrl: './if-else-example.component.html',
  styleUrls: ['./if-else-example.component.css']
})
export class IfElseExampleComponent implements OnInit {
  ShowName =true;
  Styles = "background";
  constructor() { }

  ngOnInit() {
  }

}
