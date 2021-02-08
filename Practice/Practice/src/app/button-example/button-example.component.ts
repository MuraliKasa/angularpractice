import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.css']
})
export class ButtonExampleComponent implements OnInit {
  buttonstate=false;
  messages:string;
  constructor() {
    setTimeout(() => {
      this.buttonstate = true;
    }, 3000);
   }

  ngOnInit() {
  }

  OnClick():void 
  {
this.messages= "This is the Angular Practice session";
  }
}
