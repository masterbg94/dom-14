import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyDetailComponent } from './pages/property-detail.component';

const routes: Routes = [
  {
	path: '',
	component: PropertyDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyDetailRouteModule {}
