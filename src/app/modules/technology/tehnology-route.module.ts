import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TehnologyComponent } from 'src/app/modules/technology/pages/tehnology.component';

const routes: Routes = [
  {
    path: '',
    component: TehnologyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TehnologyRouteModule {}
