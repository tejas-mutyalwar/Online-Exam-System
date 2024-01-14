import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit{
  firstNameHome = "";
  lastNameHome = "";

  constructor(private login : LoginService, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.firstNameHome = this.login.getUser().firstName;
    this.lastNameHome = this.login.getUser().lastName;
  }
}
