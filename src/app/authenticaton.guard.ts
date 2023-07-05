import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable()

export class AuthenticationGuard implements CanActivate{

  constructor(private _router: Router) { }
 
  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    this._router.navigate(['login']);
    return false;
  }

}