import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import noUiSlider from "nouislider";
import { AuthService } from "src/app/core/services/auth.service";
import { LoginComponent } from "../modals/login/login.component";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {


  @ViewChild(LoginComponent)
  public LoginModal : LoginComponent;


  isCollapsed = true;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor(public authService : AuthService ,  private router: Router) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
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
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }


  showModalOrGoToTrackingPage(){
    if (this.authService.currentUserValue) {
      // user logged in
      this.router.navigate(['/track-product']);
    } else {
      // not logged in show modal
      this.LoginModal.open()
    }
  }



}
