import {NgModule} from "@angular/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";

const customMaterial = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
]

@NgModule({
  imports: [customMaterial],
  exports: [customMaterial]
})

export class customMaterialModule {
}
