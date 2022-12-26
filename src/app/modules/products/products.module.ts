import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {NgxGalleryModule} from "@kolkov/ngx-gallery";

import {ProductsRoutingModule} from 'src/app/modules/products/products-routing.module';
import {ProductsComponent} from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    NgxGalleryModule
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {
}
