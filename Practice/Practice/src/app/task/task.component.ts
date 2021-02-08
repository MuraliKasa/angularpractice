import { Component, OnInit } from '@angular/core';
import { HtmlAstPath } from '@angular/compiler';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  serverName:string;
  buttonstate:boolean = false;
   
  variable:string;

  constructor() {
    setTimeout(() => {
      this.buttonstate = true;
    }, 2000);
   }

  ngOnInit() {
  }

  UpdateServerName(event: Event){
    // this.serverName=(event.target as HTMLInputElement).value;
    if(this.serverName == '')
    {
        this.buttonstate = false;
    }
    else{
      this.buttonstate = true;
      
    }

  }
  OnClick():void{
   this.variable= "The Server is Created! Server Name Is:"+this.serverName;
  }
}
