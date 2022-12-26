import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import {TehnologyComponent} from 'src/app/modules/technology/pages/tehnology.component';
import {TehnologyRouteModule} from 'src/app/modules/technology/tehnology-route.module';
import {customMaterialModule} from "../../shared/customMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    TehnologyRouteModule,
    customMaterialModule,
    TranslateModule,
  ],
  declarations: [
    TehnologyComponent
  ],
  exports: [
    TehnologyComponent
  ]
})
export class TehnologyModule {

}
