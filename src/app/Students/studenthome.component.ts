import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {
name: string = 'Ashok Kumar';
fatherName: string  = 'Jaya Kumar';
motherName: string = 'Priyanka';
dob: string = '12/12/1992';
phone: number = 9999999999;
regNum: number = 12345;
standard: string = 'X';
profilePhoto: string = 'http://lorempixel.com/600/600/people/1'

  constructor() { }

  ngOnInit() {
    
  }

  toggleSidebar() {
  }

}
