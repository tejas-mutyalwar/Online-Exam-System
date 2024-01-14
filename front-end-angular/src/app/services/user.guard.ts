import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const userGuard: CanActivateFn = (route, state) => {

    if (inject(LoginService).isUserLoggedIn() && inject(LoginService).getUserRole() == "STUDENT") {
      return true;
    }
    inject(Router).navigate(['/login']);
    return false;
};
