import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login : LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add jwt from local storage to every http request
        let authRequest = req;
        const token = this.login.getToken();
        console.log("inside interceptor");
        if (token != null) {
            authRequest = authRequest.clone({
                setHeaders:{ Authorization : `Bearer ${token}`}
            });
            console.log("Authorization added in request header")
        }
        
        return next.handle(authRequest);
    }
}

export const authInterceptorProviders=[
    {
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi : true
    }
];