import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
// import { MapModule } from 'src/app/shared/components/map/map.module';
import {ServicesModule} from 'src/app/shared/components/services/services.module';

import {ContactRouteModule} from './contact-route.module';
import {ContactComponent} from './pages/contact.component';
import {customMaterialModule} from "../../shared/customMaterial.module";

@NgModule({
  imports: [
    ContactRouteModule,
    CommonModule,
    ReactiveFormsModule,
    customMaterialModule,
    // MapModule,
    ServicesModule,
    TranslateModule,
  ],
  declarations: [
    ContactComponent,
  ],
  exports: [],
})
export class ContactModule {
  form: FormGroup;
}
