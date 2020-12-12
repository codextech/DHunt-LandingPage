import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import { HttpClientModule } from '@angular/common/http';

import { IndexComponent } from "./index/index.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { LayoutComponent } from "./layout/layout.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { TopNavComponent } from "./layout/top-nav/top-nav.component";
import { WhoWeAreComponent } from "./who-we-are/who-we-are.component";
import { ErrorComponent } from "./error/error.component";
import { AddTrackProductsComponent } from "./add-track-products/add-track-products.component";
import { LoginComponent } from "./modals/login/login.component";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { AlertComponent } from "./modals/alert/alert.component";


export function tokenGetter() {
  return localStorage.getItem('auth_token');
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    NgxSmartModalModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter,
    //     headerName: 'x-auth-token'

    //   }
    // })
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    WhoWeAreComponent,
    ErrorComponent,
    LayoutComponent,
    FooterComponent,
    TopNavComponent,
    AddTrackProductsComponent,
    LoginComponent,
  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    LoginComponent,
    AddTrackProductsComponent,
    ErrorComponent,
    WhoWeAreComponent,
    LayoutComponent,
    FooterComponent,
    TopNavComponent
  ],
  providers: []
})
export class PagesModule {}
