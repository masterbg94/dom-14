import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {Title} from "@angular/platform-browser";
import {Globals} from "./shared/services/globals";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dom-14';
  innerWidth: number;
  isOpen = true;
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
  public navbarCollapsed: boolean;
  @ViewChild('drawer') drawer: any;
  name:string;
  public availableLanguages: any[] = [
    {
      label: 'serbian',
      code: 'rs-RS',
      value: 'sr',
      flag: '../../../../assets/images/serbian.png',
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
      flag: '../../../../assets/images/usflag.png',
    },
    // {
    //   label: 'Deutsch',
    //   code: 'de-DE',
    //   value: 'de',
    //   flag: '../../../../assets/images/germanflag.png'
    // }
  ];
  currentLanguage = this.availableLanguages[0];
  isBrowser: boolean;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

    private titleService: Title,
    public globals: Globals
  ) {
    this.isBrowser = globals.isPlatformBrowser;
    translateService.addLangs(['sr', 'en']);
    translateService.setDefaultLang('sr');
    translateService.use('sr');
  }

  ngOnInit(): void {
    if(this.globals.isPlatformBrowser) {
      if (window !== undefined) {
        this.innerWidth = window.innerWidth;
        console.log('innerWidth', innerWidth);
      }
    }

    this.router.events.subscribe(arg => {
      if (this.globals.isPlatformBrowser){
        window.scrollTo(0, 0);
      }
      if (arg instanceof NavigationEnd) {
        this.name = this.getTitle(this.activatedRoute.snapshot);
        if (this.innerWidth < 992) {
          const doc = document.querySelector('.mat-drawer-content');
          if (doc != null) {
            doc.scrollTop = 0;
          }
        }
      }
    });

    //    Router title
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      // If route module have child than it read child [data:{title:'any'}]
      const childRoute = this.getChild(this.activatedRoute);
      childRoute.data.subscribe(data => {
        this.titleService.setTitle(data.title);
      });
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    if(this.globals.isPlatformBrowser){
      this.innerWidth = window.innerWidth;
    }
  }

  public getTitle = (snapshot: ActivatedRouteSnapshot): string => {
    if (!!snapshot && !!snapshot.children && !!snapshot.children.length) {
      return this.getTitle(snapshot.children[0]);
    } else if (!!snapshot.data && !!snapshot.data['title']) {
      return snapshot.data['title'];
    } else {
      return '';
    }
  }

  public setLanguage(language: any) {
    this.currentLanguage = language;
    this.translateService.use(language.value);
  }

  // If route module have child than it read child [data:{title:'any'}]
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
