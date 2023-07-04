import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardServiceService } from './authguard-service.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate{
  //someCondition: true;

  constructor(private _router: Router, private auth: AuthguardServiceService) { }
 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    var isAuthenticated = this.auth.login;
    if (!isAuthenticated) {
      this._router.navigate(['/login']);
    }
    return isAuthenticated;
  }


  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }

}