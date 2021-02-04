import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  emails = [
    {name:"Anakin Skywalker", Subject:"Anakin's email Subject",Body:"This is email  from anakin",time:"Today",userImage:"https://i.insider.com/56819d57e6183e263a8b5041?width=1065&format=jpeg"},
    {name:"Darth Vader", Subject:"Darth vader says Hi",Body:"This is email Body fro darth vades email",time:"15:30",userImage:"../../assets/Image.png"},
    {name:"Luke", Subject:"Email Subject from luke skywalker",Body:"Luke Skywalker",time:"01:33",userImage:"https://static.wikia.nocookie.net/disney/images/f/fb/Profile_-_Luke_Skywalker.png/revision/latest?cb=20190313094501"},
    {name:"Han solo", Subject:"Email subject 2",Body:"Han solo",time:"Yesterday",userImage:"https://www.pngitem.com/pimgs/m/443-4432955_han-solo-cartoon-hd-png-download.png"}
]
  emailToPass:any;
  constructor() { }

  ngOnInit() {
  }
  selectedEmail(e){
    this.emailToPass = e;
  }
}
