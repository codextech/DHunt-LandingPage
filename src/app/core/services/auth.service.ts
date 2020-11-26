import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
declare const FB : any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  constructor(private http: HttpClient , private router: Router) {

  FB.init({
    appId      : environment.fbAppId,
    status     : false, // the SDK will attempt to get info about the current user immediately after init
    cookie     : true,  // enable cookies to allow the server to access
    // the session
    xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
    version    : 'v3.0' // use graph api version 2.5
  });


  this.currentUserSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem("user"))
  );
  this.currentUser = this.currentUserSubject.asObservable();
 }



 fbLogin() {
    FB.login(result  => {
      console.log("🚀 ~ file: auth.service.ts ~ line 47 ~ AuthService ~ returnnewPromise ~ result", result)
      if (result.authResponse) {
        return this.http
          .get(`${environment.apiUrl}/auth/facebook`, {
            params : {access_token: result.authResponse.accessToken}
          }).subscribe((res: any) => {
            console.log("🚀 ~ file: auth.service.ts ~ line 50 ~ AuthService ~ returnnewPromise ~ response", res)
            const token = res.access_token;
            const user = res.user;
            if (token) 
              localStorage.setItem('auth_token', JSON.stringify(token));
            if (user) 
              localStorage.setItem('user', JSON.stringify(user));
              
            this.currentUserSubject.next(user);
            location.reload()
            // this.router.navigate(['/']);
          }, err => {
          console.log("🚀 ~ file: auth.service.ts ~ line 41 ~ AuthService ~ returnnewPromise ~ err", err)
          })
         
    }}, { scope: 'public_profile,email' });
}

isLoggedIn() {
  // return new Promise((resolve, reject) => {
  //   this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
  // });
}

getCurrentUser() {
  // return new Promise((resolve, reject) => {
  //   return this.http.get(`http://localhost:8000/api/auth/me`).toPromise().then(response => {
  //     resolve(response);
  //   }).catch(() => reject());
  // });
}


  // user data
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

logout() {
  // FB.getLoginStatus(function(response) { 
  // console.log("🚀 ~ file: auth.service.ts ~ line 72 ~ AuthService ~ FB.getLoginStatus ~ response", response)
  // })
  localStorage.removeItem('auth_token');
  localStorage.clear();
  this.currentUserSubject.next(null);

  this.router.navigate(['/']);

  FB.logout(function(response) {
    console.log("🚀 ~ file: auth.service.ts ~ line 74 ~ AuthService ~ FB.logout ~ response", response)
  });

}


}
