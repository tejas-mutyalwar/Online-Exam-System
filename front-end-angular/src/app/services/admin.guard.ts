import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  if (inject(LoginService).isUserLoggedIn() && inject(LoginService).getUserRole() == "ADMIN") {
    return true;
  }
  inject(Router).navigate(['/login']);
  return false;
};
