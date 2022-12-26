import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public ngOnInit(): void {
  }
  public change(event: any) {
    console.log(event);
  }
}
