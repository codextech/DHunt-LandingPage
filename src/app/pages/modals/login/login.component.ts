import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isCollapsed = true;
  focus;
  focus1;
  focus2;

  @ViewChild('myModal2' , {static: true}) modal: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public open(): void {
    //show modal
    console.log("🚀 ~ file: login.component.ts ~ line 24 ~ LoginComponent ~ open ~ this.modal", this.modal)
    this.modal.show();
 }


 fbLogin() {
  this.authService.fbLogin();
}

}
