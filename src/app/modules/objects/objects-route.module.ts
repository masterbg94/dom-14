import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectsComponent } from 'src/app/modules/objects/pages/objects.component';


const routes: Routes = [
  {
    path: '',
    component: ObjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectsRouteModule {}
