import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
// 3rd party
import {CarouselModule} from "ngx-bootstrap/carousel";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    TranslateModule
  ]
})
export class HomeModule {
}
