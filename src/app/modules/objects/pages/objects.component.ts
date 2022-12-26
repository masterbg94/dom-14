import { Component, OnInit } from '@angular/core';
import { ObjectsModel } from 'src/app/shared/model/objects.model';
import { ObjectsService } from 'src/app/shared/services/object.service';

@Component({
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss'],
})
export class ObjectsComponent implements OnInit {

  objects: ObjectsModel[];
  brvnare: ObjectsModel[];
  prizemneKuce: ObjectsModel[];
  spratneKuce: ObjectsModel[];

  constructor(private objectService: ObjectsService) {
  }

  public ngOnInit(): void {
    this.objects = this.objectService.getAllObjects();
    console.log(this.objects);
    this.brvnare = this.objectService.getAllObjects().filter(x => x.buildingType === 'brvnara');
    this.spratneKuce = this.objectService.getAllObjects().filter(x => x.buildingType === 'spratna');
    this.prizemneKuce = this.objectService.getAllObjects().filter(x => x.buildingType === 'prizemna');
    console.log('brvnare', this.brvnare);
    console.log('prizemne', this.prizemneKuce);
    console.log('spratne', this.spratneKuce);
  }
}
