import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import {ObjectsRouteModule} from 'src/app/modules/objects/objects-route.module';
import {ObjectsComponent} from 'src/app/modules/objects/pages/objects.component';
import {customMaterialModule} from "../../shared/customMaterial.module";

@NgModule({
  imports: [
    CommonModule,
    ObjectsRouteModule,
    customMaterialModule,
    TranslateModule,
  ],
  exports: [
    ObjectsComponent
  ],
  declarations: [
    ObjectsComponent
  ]
})
export class ObjectsModule {
}
