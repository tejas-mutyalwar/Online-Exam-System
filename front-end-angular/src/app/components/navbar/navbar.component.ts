import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user : any;
  isAdmin = false;
  isTeacher = false;
  isStudent = false;

  constructor(public login : LoginService, private router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isUserLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isUserLoggedIn();
        this.user = this.login.getUser();
        if (this.user.authorities[0].authority == "ADMIN") {
          this.isAdmin = true;
          this.isStudent = false;
          this.isTeacher = false;
        } else if (this.user.authorities[0].authority == "TEACHER") {
          this.isTeacher = true;
          this.isAdmin = false;
          this.isStudent = false;

        } else if (this.user.authorities[0].authority == "STUDENT")  {
          this.isStudent = true;
          this.isAdmin = false;
          this.isTeacher = false
        }
      }
    );
  }

  logout() {
    this.login.logout();
    this.login.loginStatusSubject.next(false);
    this.router.navigate(['login']);
    Swal.fire("Logout Successfull !!", "", "success");
  }

}
