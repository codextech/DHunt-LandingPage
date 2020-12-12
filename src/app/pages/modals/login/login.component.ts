import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
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

  returnUrl: string
  @ViewChild('myModal2' , {static: true}) modal: any;
  constructor(private authService: AuthService,
    private ngxSmartModalService : NgxSmartModalService,
    private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  public open(): void {
    //show modal
    console.log("🚀 ~ file: login.component.ts ~ line 24 ~ LoginComponent ~ open ~ this.modal", this.modal)
    this.modal.show();
 }


 fbLogin() {
  this.authService.fbLogin().subscribe(res => {
    this.ngxSmartModalService.close('authModal')
    this.router.navigateByUrl(this.returnUrl);
  console.log("🚀 ~ file: login.component.ts ~ line 34 ~ LoginComponent ~ this.authService.fbLogin ~ res", res)
  }, err=> {
  console.log("🚀 ~ file: login.component.ts ~ line 36 ~ LoginComponent ~ this.authService.fbLogin ~ err", err)
  });
}

}
