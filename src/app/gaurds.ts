import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable(
    {
        providedIn:'root'
    }
)
export class TestCanActivate implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        console.log("Can activate check")
        //return false;
       return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(true)),10

       });

      }





       

      }