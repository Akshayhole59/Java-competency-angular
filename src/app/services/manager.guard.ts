// import { CanActivateFn, Router } from '@angular/router';

// //export const managerGuard: CanActivateFn = (route, state) => {
// //  return true;
// //};
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// //import { LoginService } from './login.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class managerGuard implements CanActivate {

//   constructor( private router:Router){}

//   //private login:LoginService,

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
//     //  if(this.login.isLoggedIn()  && this.login.getUserRole() == 'Manager'){
//     //      return true;
//     //  }
//       this.router.navigate(['login']);
//     return false;
//   }
// }
