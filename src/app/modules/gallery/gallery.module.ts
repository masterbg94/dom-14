import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryRouteModule } from 'src/app/modules/gallery/gallery-route.module';
import { GalleryComponent } from 'src/app/modules/gallery/pages/gallery.component';
// 3rd party
import { TranslateModule } from '@ngx-translate/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

@NgModule({
    imports: [
        CommonModule,
        GalleryRouteModule,
        Angular2ImageGalleryModule,
        TranslateModule,
    ],
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ],
  providers: [
  ]
})
export class GaleryModule {}
