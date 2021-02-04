import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-email-details',
  templateUrl: './email-details.component.html',
  styleUrls: ['./email-details.component.scss']
})
export class EmailDetailsComponent implements OnInit {

  @Input() emailToReceive:any;
  constructor() { }

  ngOnInit() {

  }

  
  

}
