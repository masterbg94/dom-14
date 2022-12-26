import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Dom Naslovna|Montazne kuce',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom Naslovna|Montazne kuce',
    },
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./modules/aboutus/aboutus.module').then(m => m.AboutUsModule),
    data: {
      title: 'Dom montazne kuce|O nama',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom montazne kuce|O nama',
    },
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
