import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin();
    }

    checkLogin(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.authService.isLoggedIn().then(() => {
                resolve(true);
            }).catch(() => {
                this.router.navigate(['/']);
                reject(false);
            });
        });
    }
}