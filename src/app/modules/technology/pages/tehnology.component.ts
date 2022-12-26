import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  correct: string;
  incorrect: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Temelj i ploča', correct: 'fas fa-times', incorrect: 'fas fa-times'},
  {position: 2, name: 'Prevoz i istovar', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 3, name: 'Montaža i gradnja', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 4, name: 'Postavka krovnog pokrivača', correct: 'fas fa-check', incorrect: 'fas fa-check fa-times'},
  {position: 5, name: 'Opšivanje streha', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 6, name: 'Ugradnja oluka', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 7, name: 'Ugradnja spoljne pvc stolarije', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 8, name: 'Roletne', correct: 'fas fa-check', incorrect: 'fas fa-times'},
  {position: 9, name: 'Komarnici', correct: 'fas fa-times', incorrect: 'fas fa-times'},
  {position: 10, name: 'Ugradnja unutrašnje stolarije', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 11, name: 'Postavka gips kartonski ploča', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 12, name: 'Postavka spoljne izolacije', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 13, name: 'Povecana termička izoalcija', correct: 'fas fa-times', incorrect: 'fas fa-times'},
  {position: 14, name: 'Izrada fasade', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 15, name: 'Sredjivanje unutrašnjih zidova', correct: 'fas fa-check', incorrect: 'fas fa-check'},
  {position: 16, name: 'Izrada dimnjaka', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 17, name: 'Razvod vode i kanalizacije', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 18, name: 'Ugradnja pločica i sanitarije', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 19, name: 'Elektro instalacije', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 20, name: 'Centralno grejanje', correct: 'fas fa-times', incorrect: 'fas fa-times'},
  {position: 21, name: 'Hidro izolacija poda', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 22, name: 'Termo izolacija poda', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 23, name: 'Košuljica-izravnjavajući sloj', correct: 'fas fa-times', incorrect: 'fas fa-check'},
  {position: 24, name: 'Podna obloga', correct: 'fas fa-times', incorrect: 'fas fa-check'},
];

@Component({
  templateUrl: './tehnology.component.html',
  styleUrls: ['./tehnology.component.scss']
})

export class TehnologyComponent {
  public klasik = [
    {
      name: 'EPS 100 mm'
    },
    {
      name: 'OSB ploca 10 mm'
    },
    {
      name: 'Drveni ram 100 mm'
    },
    {
      name: 'Mineralna vuna 100 mm'
    },
    {
      name: 'Folija'
    },
    {
      name: 'OSB ploča 10 mm'
    },
    {
      name: 'GKB ploče 12.5 mm'
    }
  ];
  public premium = [
    {
      name: 'EPS 150 mm'
    },
    {
      name: 'OSB ploca 10 mm'
    },
    {
      name: 'Drveni ram 120 mm'
    },
    {
      name: 'Mineralna vuna 120 mm'
    },
    {
      name: 'Folija'
    },
    {
      name: 'OSB ploča 10 mm'
    },
    {
      name: 'GKB ploče 12.5 mm'
    }
  ];
  public modern = [
    {
      name: 'EPS 150 mm'
    },
    {
      name: 'OSB ploca 10 mm'
    },
    {
      name: 'Drveni ram 140 mm'
    },
    {
      name: 'Mineralna vuna 140 mm'
    },
    {
      name: 'Folija'
    },
    {
      name: 'Instalaciona letva 45 mm'
    },
    {
      name: 'Mineralna vuna  50 mm'
    },
    {
      name: 'OSB ploča 9 mm'
    },
    {
      name: 'GKB ploče 12.5 mm'
    }
  ];
  public pasiv = [
    {
      name: 'Grafitni stiropor  200 mm'
    },
    {
      name: 'fermacell ploca 15 mm'
    },
    {
      name: 'Drveni ram 160 mm'
    },
    {
      name: 'Kamena vuna 150'
    },
    {
      name: 'PVC Folija'
    },
    {
      name: 'Instalaciona letva 45 mm'
    },
    {
      name: 'Kamena vuna  50 mm'
    },
    {
      name: 'OSB ploča 10 mm'
    },
    {
      name: 'GKB ploče 12.5 mm'
    }
  ];
  displayedColumns: string[] = ['number', 'fase', 'gray', 'key'];
  dataSource = ELEMENT_DATA;
}
