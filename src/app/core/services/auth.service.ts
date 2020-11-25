import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare const FB : any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  FB.init({
    appId      : environment.fbAppId,
    status     : false, // the SDK will attempt to get info about the current user immediately after init
    cookie     : true,  // enable cookies to allow the server to access
    // the session
    xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
    version    : 'v3.0' // use graph api version 2.5
  });


 }



 fbLogin() {
  return new Promise((resolve, reject) => {

    FB.login(result  => {
      console.log("🚀 ~ file: auth.service.ts ~ line 47 ~ AuthService ~ returnnewPromise ~ result", result)
      if (result.authResponse) {
        return this.http
          .get(`${environment.apiUrl}/auth/facebook`, {
            params : {access_token: result.authResponse.accessToken}
          })
          .toPromise()
          .then(response => {
          console.log("🚀 ~ file: auth.service.ts ~ line 50 ~ AuthService ~ returnnewPromise ~ response", response)

          const token = response;
          if (token) {
            localStorage.setItem('auth_token', JSON.stringify(token));
          }
          resolve(response);
          })
          .catch(() => reject());
      } else {
        reject();
      }
    }, { scope: 'public_profile,email, name' });
  });
}

isLoggedIn() {
  return new Promise((resolve, reject) => {
    this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
  });
}

getCurrentUser() {
  return new Promise((resolve, reject) => {
    return this.http.get(`http://localhost:8000/api/auth/me`).toPromise().then(response => {
      resolve(response);
    }).catch(() => reject());
  });
}

logout() {
  console.log('........');
  FB.getLoginStatus(function(response) { 
  console.log("🚀 ~ file: auth.service.ts ~ line 72 ~ AuthService ~ FB.getLoginStatus ~ response", response)
  })
  localStorage.removeItem('auth_token');
  localStorage.clear();

  FB.logout(function(response) {
    console.log("🚀 ~ file: auth.service.ts ~ line 74 ~ AuthService ~ FB.logout ~ response", response)
    this.deleteCookie("fblo_" + environment.fbAppId); // fblo_yourFBAppId. example: fblo_444499089231295
  });
}




deleteCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

}
