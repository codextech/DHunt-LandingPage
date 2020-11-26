import { Component, OnDestroy, OnInit } from '@angular/core';
import noUiSlider from "nouislider";
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit , OnDestroy{

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  displayName: string;
  displayEmail: string;
  constructor(public authService : AuthService) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {

    this.authService.currentUser.subscribe(res => {
    console.log("🚀 ~ file: top-nav.component.ts ~ line 28 ~ TopNavComponent ~ ngOnInit ~ res", res)
    console.log("🚀 ~ file: top-nav.component.ts ~ line 30 ~ TopNavComponent ~ ngOnInit ~ this.authService.currentUserValue", this.authService.currentUserValue)
     
    if (this.authService.currentUserValue) {
        // this.displayName = this.authService.user.displayName;
        this.displayName = `${this.authService.currentUserValue.firstName} ${this.authService.currentUserValue.lastName}`;
        this.displayEmail = this.authService.currentUserValue.email;
      }
    })


    setTimeout(() => {
      


    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });

  }, 200);

  }


  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }


  logOut() {
    this.authService.logout();
  }

}
