import {Component, Input, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Globals} from "../../services/globals";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})

export class NavigationMenuComponent implements OnInit {
  public navbarCollapsed: boolean;
  menu = [
    {
      name: 'MENU.home',
      router: '',
      icon: 'fas fa-home',
    },
    {
      name: 'MENU.aboutus',
      router: 'aboutus',
      icon: 'fas fa-building',
    },
    {
      name: 'MENU.services',
      router: 'services',
      icon: 'fas fa-shopping-bag',
    },
    {
      name: 'MENU.objects',
      router: 'objects',
      icon: 'fab fa-houzz',
    },
    {
      name: 'MENU.products',
      router: 'products',
      icon: 'fab fa-houzz',
    },
    {
      name: 'MENU.gallery',
      router: 'gallery',
      icon: 'fas fa-camera',
    },
    {
      name: 'MENU.technology',
      router: 'technology',
      icon: 'fas fa-sitemap',
    },
    {
      name: 'MENU.contact',
      router: 'contact',
      icon: 'fas fa-map-marked',
    },
  ];
  public availableLanguages: any[] = [
    {
      label: 'serbian',
      code: 'rs-RS',
      value: 'sr',
      flag: '../../../../assets/images/serbian.png'
    },
    // {
    //   label: 'Slovenian',
    //   code: 'sl-SL',
    //   value: 'sl',
    //   flag: '../../../../assets/images/slovenian.png'
    // },
    {
      label: 'english',
      code: 'en-US',
      value: 'en',
      flag: '../../../../assets/images/usflag.png'
    },
    // {
    //   label: 'Deutsch',
    //   code: 'de-DE',
    //   value: 'de',
    //   flag: '../../../../assets/images/germanflag.png'
    // }
  ];
  currentLanguage = this.availableLanguages[0];
  @Input() width:number;
  isMenuCollapsed:boolean = true;

  constructor(private translateService: TranslateService, public globals: Globals) {
  }
  public ngOnInit(): void {
    if (this.globals.isPlatformBrowser){
      let prevScrollpos = window.pageYOffset;

      if (this.width>1025){
        window.onscroll = function () {
          const currentScrollPos = window.pageYOffset;
          // console.log(currentScrollPos);

          if (prevScrollpos > currentScrollPos) {
            document.getElementById('header').classList.remove('hidden');

          } else {
            if (currentScrollPos > 60) {
              document.getElementById('header').classList.add('hidden');

            }
          }
          prevScrollpos = currentScrollPos;
        };
      }
    }
  }

  public setLanguage(language: any) {
    this.currentLanguage = language;
    this.translateService.use(language.value);
  }

  collapseMenu(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
