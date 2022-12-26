import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
// import {NgxGalleryModule} from 'ngx-gallery'; // TODO: Replace with npm i @kolkov/ngx-gallery
// import { MapModule } from '../../shared/components/map/map.module';
import {PropertyDetailComponent} from './pages/property-detail.component';
import {PropertyDetailRouteModule} from './property-detail-route.module';
import {customMaterialModule} from "../../shared/customMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    PropertyDetailRouteModule,
    // NgxGalleryModule, // TODO: Replace with npm i @kolkov/ngx-gallery
    ReactiveFormsModule,
    customMaterialModule,
    // MapModule // TODO: Fix maps
  ],
  declarations: [
    PropertyDetailComponent,
  ],
  exports: [],
})
export class PropertyDetailModule {
}
