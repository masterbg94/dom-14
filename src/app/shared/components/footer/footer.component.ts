import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  agentMenu = [
    {
      name: 'MENU.home',
      router: '',
    },
    {
      name: 'MENU.aboutus',
      router: '/aboutus',
    },
    {
      name: 'MENU.services',
      router: '/services',
    },
    {
      name: 'MENU.gallery',
      router: '/contact',
    },
    {
      name: 'MENU.technology',
      router: '/contact',
    },
    {
      name: 'MENU.contact',
      router: '/contact',
    },
  ];
  nekretnine = [
    {
      name: 'Facebook',
      router: '/',
    },
    {
      name: 'Twitter',
      router: '/',
    },
    {
      name: 'Instagram',
      router: 'https://www.instagram.com/montaznekucedom/',
    },
    {
      name: 'YouTube',
      router: '/',
    },
  ];
  linkovi = [
    {
      name: 'FOOTER.privacy',
      router: '/privacypolicy',
    },
    {
      name: 'FOOTER.terms',
      router: '/termsofuse',
    },
  ];
}
