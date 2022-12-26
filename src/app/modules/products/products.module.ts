import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {ProductsRoutingModule} from 'src/app/modules/products/products-routing.module';
import {ProductsComponent} from './products.component';
// TODO: Replace with npm i @kolkov/ngx-gallery
// import {NgxGalleryModule} from "ngx-gallery";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    // TODO: Replace with npm i @kolkov/ngx-gallery
    // NgxGalleryModule
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {
}
