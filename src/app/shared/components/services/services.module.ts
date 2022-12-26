import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import {ServicesComponent} from 'src/app/shared/components/services/services.component';
import {customMaterialModule} from "../../customMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    customMaterialModule,
    TranslateModule,
  ],
  declarations: [
    ServicesComponent
  ],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule {
}
