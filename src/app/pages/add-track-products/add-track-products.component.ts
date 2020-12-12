import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { TrackProductService } from 'src/app/core/services/track-product.service';

@Component({
  selector: 'app-add-track-products',
  templateUrl: './add-track-products.component.html',
  styleUrls: ['./add-track-products.component.scss']
})
export class AddTrackProductsComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  
  data : any[] = [];
  model: any = {};
  constructor(
    private trackProductService : TrackProductService,
    private ngxSmartModalService : NgxSmartModalService,
    
    ) { }

  ngOnInit() {
    this.getTrackProducts();
  }


  getTrackProducts() {
    console.log("🚀 ~ file: add-track-products.component.ts ~ line 32 ~ AddTrackProductsComponent ~ onSubmit ~ this.form.value.link", this.model)
    this.trackProductService.getTrackingProducts().subscribe(res => {
    console.log(">>>>>>>>>", res)
    this.data = res
    }, err => {
  console.log("🚀 ~ file: add-track-products.component.ts ~ line 24 ~ AddTrackProductsComponent ~ onSubmit ~ err", err)
    });
  }

  onSubmit() {
    console.log("🚀 ~ file: add-track-products.component.ts ~ line 32 ~ AddTrackProductsComponent ~ onSubmit ~ this.form.value.link", this.model)
    this.trackProductService.addProductForTracking({
      link : this.model.link
    }).subscribe(res => {
      this.ngxSmartModalService.open('alertModal')
      console.log("🚀 ~ file: add-track-products.component.ts ~ line 22 ~ AddTrackProductsComponent ~ onSubmit ~ res", res)
    }, err => {
    console.log("🚀 ~ file: add-track-products.component.ts ~ line 24 ~ AddTrackProductsComponent ~ onSubmit ~ err", err)
    });
  }
}
