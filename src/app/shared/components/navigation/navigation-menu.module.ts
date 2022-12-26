import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';

import { NavigationMenuComponent } from './navigation-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgbModule,
    // TranslateModule,
  ],
  declarations: [
	  NavigationMenuComponent,
  ],
  exports: [
	  NavigationMenuComponent,
  ],
})

export class NavigationMenuModule {}
