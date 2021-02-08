import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
    Name:string = "Murali Krishna Kasa";
    date :Date = new Date(2020,2,4);
    person={
      FirstName:"Kasa",
      LastName:"Murali Krishna"
    };
  constructor() { }

  ngOnInit() {
  }

}
