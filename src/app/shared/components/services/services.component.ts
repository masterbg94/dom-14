import { Component, HostListener, OnInit } from '@angular/core';
import {Globals} from "../../services/globals";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit{
  public innerWidth: number;
  public serviceFirstRow = [
    {
      title: 'SERVICES.service1-title',
      icon: 'person_pin',
      text: 'SERVICES.service1-text',
    },
    {
      title: 'SERVICES.service2-title',
      icon: 'store',
      text: 'SERVICES.service2-text',
    },
  ];
  public serviceSecondRow = [
    {
      title: 'SERVICES.service3-title',
      icon: 'assignment',
      text: 'SERVICES.service3-text',
    },
    {
      title: 'SERVICES.service4-title',
      icon: 'security',
      text: 'SERVICES.service4-text'
    }
  ];

  constructor(public globals: Globals) {
  }

  public ngOnInit(): void {
    if (this.globals.isPlatformBrowser){
      this.innerWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    if (this.globals.isPlatformBrowser){
      this.innerWidth = window.innerWidth;
    }
  }
}
