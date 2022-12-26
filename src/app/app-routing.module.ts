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
  },
  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GaleryModule),
    data: {
      title: 'Dom montazne kuce|Galerija montaznih kuca Ivanjica',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom montazne kuce|Galerija montaznih kuca Ivanjica',
    },
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/services/service.module').then(m => m.ServiceModule),
    data: {
      title: 'Dom montazne kuce nase usluge|Usluge gradnje montaznih kuca',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom montazne kuce|Galerija montaznih kuca Ivanjica',
    },
  },
  {
    path: 'technology',
    loadChildren: () => import('./modules/technology/tehnology.module').then(m => m.TehnologyModule),
    data: {
      title: 'Dom montazne kuce tehnologije gradnje montaznih kuca|Montazni domovi',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom montazne kuce tehnologije gradnje montaznih kuca|Montazni domovi',
    },
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    data: {
      title: 'Dom montazne kuce proizvodi montaznih kuca|Nasi proizvodi',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom montazne kuce proizvodi montaznih kuca|Nasi proizvodi',
    },
  },
  {
    path: 'objects',
    loadChildren: () => import('./modules/objects/objects.module').then(m => m.ObjectsModule),
    data: {
      title: 'Dom montazne kuce proizvodi montaznih kuca|Nasi proizvodi',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom montazne kuce proizvodi montaznih kuca|Nasi proizvodi',
    },
  },
  {
    path: 'objects/:id',
    loadChildren: () => import('./modules/property-detail/property-detail.module').then(m => m.PropertyDetailModule),
    data: {
      title: 'Dom montazne kuce proizvodi montaznih kuca|Nasi proizvodi',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom montazne kuce proizvodi montaznih kuca|Nasi proizvodi',
    },
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
