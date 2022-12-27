import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {ServicesModule} from 'src/app/shared/components/services/services.module';

import {ContactRouteModule} from './contact-route.module';
import {ContactComponent} from './pages/contact.component';
import {customMaterialModule} from "../../shared/customMaterial.module";
import {MapModule} from "../../shared/components/map/map.module";

@NgModule({
  imports: [
    ContactRouteModule,
    CommonModule,
    ReactiveFormsModule,
    customMaterialModule,
    ServicesModule,
    TranslateModule,
    MapModule,
  ],
  declarations: [
    ContactComponent,
  ],
  exports: [],
})
export class ContactModule {
  form: FormGroup;
}
