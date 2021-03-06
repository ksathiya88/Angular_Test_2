import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("currentUser")) {
      // logged in so return true
      return true;
    }
    console.log("state11",state);
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
