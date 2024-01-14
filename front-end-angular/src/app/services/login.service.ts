import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	public loginStatusSubject = new Subject<boolean>;

	constructor(private http: HttpClient) { }

	//user log in , generate token
	public generateToken(loginData : any) {
		return this.http.post(`${baseUrl}/generate-token`, loginData);
	}

	//get currently logged in user
	public getCurrrentUser() {
		return this.http.get(`${baseUrl}/current-user`);
	}


	//user logged in , set item 'jwt' in local storage
	public saveToken(jwt: any) {
		localStorage.setItem("jwt", jwt);
		return true;
	}

	//is logged in ? : check is item 'jwt' is set in local storage
	public isUserLoggedIn() {
		let jwt = localStorage.getItem("jwt");
		if (jwt == undefined || jwt == "" || jwt == null) {
			return false;
		}
		return true;
	}

	//to log out : remove jwt from local storage
	public logout() {
		localStorage.removeItem("jwt");
		localStorage.removeItem("user");
		return true;
	}

	//get item 'jwt' from local storage
	public getToken() {
		return localStorage.getItem("jwt");
	}

	//set user details
	public setUser(user : any) {
		localStorage.setItem("user", JSON.stringify(user));
	}

	//get user from local storage
	public getUser() {
		let userStr = localStorage.getItem("user");
		if (userStr != null) {
			return JSON.parse(userStr);
		}
		else {
			this.logout();
			return null;
		}
	}

	//get user's first role only
	public getUserRole() {
		let user = this.getUser();
		return user.authorities[0].authority;
	}
}
