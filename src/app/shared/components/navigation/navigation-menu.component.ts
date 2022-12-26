import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    },
    {
      name: 'MENU.aboutus',
      router: 'aboutus',
    },
    {
      name: 'MENU.services',
      router: 'services',
    },
    {
      name: 'MENU.objects',
      router: 'objects',
    },
    {
      name: 'MENU.products',
      router: 'products',
    },
    {
      name: 'MENU.gallery',
      router: 'gallery',
    },
    {
      name: 'MENU.technology',
      router: 'tehnology',
    },
    {
      name: 'MENU.contact',
      router: 'contact',
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

  constructor(private translateService: TranslateService) {
  }
  public ngOnInit(): void {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos);

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

  public setLanguage(language: any) {
    this.currentLanguage = language;
    this.translateService.use(language.value);
  }
}
