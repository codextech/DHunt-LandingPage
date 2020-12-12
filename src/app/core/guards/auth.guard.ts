import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { NgxSmartModalService } from "ngx-smart-modal";
import { AuthService } from "../services/auth.service";
declare const $ : any;

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private ngxSmartModalService : NgxSmartModalService,

     private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {

      return true;
    }

    // let  isModalActive =this.ngxSmartModalService.getModal('authModal');
    // console.log("🚀 ~ file: auth.guard.ts ~ line 35 ~ AuthGuard ~ isModalActive", isModalActive)
    // if (isModalActive) {
    // setTimeout(() => {
    // this.ngxSmartModalService.open('authModal')
    // }, 2000);
    // }

    // // not logged in so redirect to login page with the return url
    this.router.navigate(["/home"], {
      queryParams: { returnUrl: state.url },
    });
    setTimeout(() => {
    this.ngxSmartModalService.open('authModal')
    }, 100);

    return false;
  }
}
