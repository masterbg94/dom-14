import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation,NgxGalleryOptions,NgxGalleryImage} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // TODO: Replace with npm i @kolkov/ngx-gallery
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[] = [];
  static = '/assets/images/dodatni-proizvodi/';
  productPictures = {
    poluOblica: [
      {
        small: this.static + 'dodatniproizvodi1.png',
        medium: this.static + 'dodatniproizvodi1.png',
        big: this.static + 'dodatniproizvodi1.png',
      },
      {
        small: this.static + 'dodatniproizvodi2.png',
        medium: this.static + 'dodatniproizvodi2.png',
        big: this.static + 'dodatniproizvodi2.png',
      },
      {
        small: this.static + 'dodatniproizvodi3.png',
        medium: this.static + 'dodatniproizvodi3.png',
        big: this.static + 'dodatniproizvodi3.png',
      },
    ],
    brvno: [
      {
        small: this.static + 'dodatniproizvodi4.png',
        medium: this.static + 'dodatniproizvodi4.png',
        big: this.static + 'dodatniproizvodi4.png',
      },
      {
        small: this.static + 'dodatniproizvodi5.png',
        medium: this.static + 'dodatniproizvodi5.png',
        big: this.static + 'dodatniproizvodi5.png',
      },
      {
        small: this.static + 'dodatniproizvodi6.png',
        medium: this.static + 'dodatniproizvodi6.png',
        big: this.static + 'dodatniproizvodi6.png',
      },
      {
        small: this.static + 'dodatniproizvodi7.png',
        medium: this.static + 'dodatniproizvodi7.png',
        big: this.static + 'dodatniproizvodi7.png',
      },
      {
        small: this.static + 'dodatniproizvodi8.png',
        medium: this.static + 'dodatniproizvodi8.png',
        big: this.static + 'dodatniproizvodi8.png',
      },
      {
        small: this.static + 'dodatniproizvodi9.png',
        medium: this.static + 'dodatniproizvodi9.png',
        big: this.static + 'dodatniproizvodi9.png',
      },
    ],
    brodskiPod: [
      {
        small: this.static + 'dodatniproizvodi10.png',
        medium: this.static + 'dodatniproizvodi10.png',
        big: this.static + 'dodatniproizvodi10.png',
      },
      {
        small: this.static + 'dodatniproizvodi11.png',
        medium: this.static + 'dodatniproizvodi11.png',
        big: this.static + 'dodatniproizvodi11.png',
      },
      {
        small: this.static + 'dodatniproizvodi12.png',
        medium: this.static + 'dodatniproizvodi12.png',
        big: this.static + 'dodatniproizvodi12.png',
      },
      {
        small: this.static + 'dodatniproizvodi13.png',
        medium: this.static + 'dodatniproizvodi13.png',
        big: this.static + 'dodatniproizvodi13.png',
      },
      {
        small: this.static + 'dodatniproizvodi14.png',
        medium: this.static + 'dodatniproizvodi14.png',
        big: this.static + 'dodatniproizvodi14.png',
      },
      {
        small: this.static + 'dodatniproizvodi15.png',
        medium: this.static + 'dodatniproizvodi15.png',
        big: this.static + 'dodatniproizvodi15.png',
      },
      {
        small: this.static + 'dodatniproizvodi16.png',
        medium: this.static + 'dodatniproizvodi16.png',
        big: this.static + 'dodatniproizvodi16.png',
      },
      {
        small: this.static + 'dodatniproizvodi17.png',
        medium: this.static + 'dodatniproizvodi17.png',
        big: this.static + 'dodatniproizvodi17.png',
      },
    ],
    fasadnaObloga: [
      {
        small: this.static + 'dodatniproizvodi18.png',
        medium: this.static + 'dodatniproizvodi18.png',
        big: this.static + 'dodatniproizvodi18.png',
      },
      {
        small: this.static + 'dodatniproizvodi19.png',
        medium: this.static + 'dodatniproizvodi19.png',
        big: this.static + 'dodatniproizvodi19.png',
      },
    ],
    deking: [
      {
        small: this.static + 'dodatniproizvodi20.png',
        medium: this.static + 'dodatniproizvodi20.png',
        big: this.static + 'dodatniproizvodi20.png',
      },
      {
        small: this.static + 'dodatniproizvodi21.png',
        medium: this.static + 'dodatniproizvodi21.png',
        big: this.static + 'dodatniproizvodi21.png',
      },
      {
        small: this.static + 'dodatniproizvodi22.png',
        medium: this.static + 'dodatniproizvodi22.png',
        big: this.static + 'dodatniproizvodi22.png',
      },
      {
        small: this.static + 'dodatniproizvodi23.png',
        medium: this.static + 'dodatniproizvodi23.png',
        big: this.static + 'dodatniproizvodi23.png',
      },
    ],
    podovi: [
      {
        small: this.static + 'dodatniproizvodi24.png',
        medium: this.static + 'dodatniproizvodi24.png',
        big: this.static + 'dodatniproizvodi24.png',
      },
      {
        small: this.static + 'dodatniproizvodi25.png',
        medium: this.static + 'dodatniproizvodi25.png',
        big: this.static + 'dodatniproizvodi25.png',
      },
      {
        small: this.static + 'dodatniproizvodi26.png',
        medium: this.static + 'dodatniproizvodi26.png',
        big: this.static + 'dodatniproizvodi26.png',
      },
    ],
    ograde: [
      {
        small: this.static + 'dodatniproizvodi27.png',
        medium: this.static + 'dodatniproizvodi27.png',
        big: this.static + 'dodatniproizvodi27.png',
      },
      {
        small: this.static + 'dodatniproizvodi28.png',
        medium: this.static + 'dodatniproizvodi28.png',
        big: this.static + 'dodatniproizvodi28.png',
      },
    ],
    pergola: [
      {
        small: this.static + 'dodatniproizvodi29.png',
        medium: this.static + 'dodatniproizvodi29.png',
        big: this.static + 'dodatniproizvodi29.png',
      },
      {
        small: this.static + 'dodatniproizvodi30.png',
        medium: this.static + 'dodatniproizvodi30.png',
        big: this.static + 'dodatniproizvodi30.png',
      },
    ],
  };

  constructor() {
    // TODO: Replace with npm i @kolkov/ngx-gallery
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      {
        breakpoint: 400,
        preview: false,
      },
    ];
  }

  ngOnInit() {
    console.log(this.productPictures.pergola);
  }

}
