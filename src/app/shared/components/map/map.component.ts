import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  mapCenter = {
    lat: 43.6050818,
    lng: 20.190402
  };
  mapZoom = 11;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [{
    lat: 43.6050818,
    lng: 20.190402
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
