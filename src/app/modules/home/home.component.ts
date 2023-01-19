import { Component, OnInit } from '@angular/core';
import {DataLayerService} from "../../shared/services/data-layer.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dlService:DataLayerService) { }

  ngOnInit(): void {
  }

  GOhomeButtonContact(){
    this.dlService.optCustomTest();
  }

}
