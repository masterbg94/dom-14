import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {customMaterialModule} from "../../shared/customMaterial.module";
import {MapModule} from "../../shared/components/map/map.module";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";

import {PropertyDetailComponent} from './pages/property-detail.component';
import {PropertyDetailRouteModule} from './property-detail-route.module';

@NgModule({
    imports: [
        CommonModule,
        PropertyDetailRouteModule,
        ReactiveFormsModule,
        customMaterialModule,
        NgxGalleryModule,
        MapModule
    ],
  declarations: [
    PropertyDetailComponent,
  ],
  exports: [],
})
export class PropertyDetailModule {
}
