import {Component, OnInit, ViewChild} from '@angular/core';


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
      router: 'tehnology',
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

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
