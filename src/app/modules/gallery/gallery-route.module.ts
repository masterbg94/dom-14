import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from 'src/app/modules/gallery/pages/gallery.component';
const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRouteModule {}
