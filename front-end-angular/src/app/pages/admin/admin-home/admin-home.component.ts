import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  firstNameHome = "";
  lastNameHome = "";

  constructor(private login : LoginService, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.firstNameHome = this.login.getUser().firstName;
    this.lastNameHome = this.login.getUser().lastName;
  }

}
