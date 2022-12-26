import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
    ],
  declarations: [
	FooterComponent,
  ],
  exports: [
	FooterComponent,
	RouterModule,
  ],
})
export class FooterModule {}
