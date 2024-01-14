import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public loginData = {
		userName: '',
		password: ''
	};

	constructor(private snack: MatSnackBar, private login: LoginService, private router : Router) { }

	ngOnInit(): void {
	}

	formSubmit() {

		console.log("login submit button clicked");

		if (this.loginData.userName.trim() == "" || this.loginData.userName == null) {
			this.snack.open("Username is required !!", "", {
				duration: 2000
			});
			return;
		}

		if (this.loginData.password.trim() == "" || this.loginData.password == null) {
			this.snack.open("Password is required !!", "", {
				duration: 2000
			});
			return;
		}
		console.log("calling generateToken...")
		this.login.generateToken(this.loginData).subscribe(
			{
				next: (data: any) => {
					console.log("data: ", data);
					//login user
					this.login.saveToken(data.jwt);
					//console.log("token saved")
					console.log("calling getCurrentUser ...")
					this.login.getCurrrentUser().subscribe(
						{
							next: (user: any) => {
								console.log( "user: " ,user);
								this.login.setUser(user);
								
								//redirect to admin dashboard
								if (this.login.getUserRole() == "ADMIN") {
									// window.location.href = '/admin';
									this.login.loginStatusSubject.next(true);
									this.router.navigate(["admin/home"]);
									Swal.fire("Login Successfull !!", "Welcome " + user.firstName + " " + user.lastName, "success");
									
								}

								//redirect to normal user dashboard
								else if (this.login.getUserRole() == "STUDENT") {
									// window.location.href = '/user';
									this.login.loginStatusSubject.next(true);
									this.router.navigate(["user/home"]);
									Swal.fire("Login Successfull !!", "Welcome " + user.firstName + " " + user.lastName, "success");
								}

								//redirect to teacher dashboard
								else if (this.login.getUserRole() == "TEACHER") {
									// window.location.href = '/teacher';
									this.login.loginStatusSubject.next(true);
									this.router.navigate(["teacher/home"]);
									Swal.fire("Login Successfull !!", "Welcome " + user.firstName + " " + user.lastName, "success");
								}

								else {
									this.login.logout();
									Swal.fire("Logout Successfull !!", "", "success");

								}
							},
							error: (error) => console.log(error),
							complete: () => console.log("inner complete")
						}
					);
				},
				error: (error) => console.log(error),
				complete: () => console.log("outer complete")
			}
		);
	}
}