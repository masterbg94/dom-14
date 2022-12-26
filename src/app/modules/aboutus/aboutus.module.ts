import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
// custom material
import {customMaterialModule} from "../../shared/customMaterial.module";
// components
import {AboutUsRouteModule} from './aboutus-route.module';
import {AboutusComponent} from './pages/aboutus.component';
import {ServicesModule} from "../../shared/components/services/services.module";

@NgModule({
  imports: [
    CommonModule,
    customMaterialModule,
    AboutUsRouteModule,
    TranslateModule,
    ServicesModule
  ],
  declarations: [
    AboutusComponent,
  ],
})
export class AboutUsModule {
}
