import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles-example',
  templateUrl: './styles-example.component.html',
  styleUrls: ['./styles-example.component.css']
})
export class StylesExampleComponent implements OnInit {
 DynamicColor = "red";
 ServerId =10;
 ServerStatus:string;
 changes:boolean;
  constructor() { 
    this.getStatus();
  }

  ngOnInit() {
  }
 getStatus()
 {
    this.ServerStatus = Math.random()>0.5?"online":"offline";
    this.changes = this.ServerStatus == "online";
 }
 getcolor()
 {
   let color = this.ServerStatus=='online'?"blue":"yellow";
   return color;
 }
}
