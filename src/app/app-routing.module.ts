import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { WhoWeAreComponent } from "./pages/who-we-are/who-we-are.component";
import { ErrorComponent } from "./pages/error/error.component";
import { AddTrackProductsComponent } from "./pages/add-track-products/add-track-products.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
{
  path: '', component: LayoutComponent,
  children: [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "who-we-are", component: WhoWeAreComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "track-product", component: AddTrackProductsComponent , canActivate: [AuthGuard],
},
  
  { path: "error", component: ErrorComponent }
]
}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      // useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
