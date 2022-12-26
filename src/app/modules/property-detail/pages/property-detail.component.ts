import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
// import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery'; // TODO: Replace with npm i @kolkov/ngx-gallery
import {Image, ObjectsModel} from 'src/app/shared/model/objects.model';
import {ObjectsService} from 'src/app/shared/services/object.service';

@Component({
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  public form: FormGroup;
  public apartment: ObjectsModel;
  // TODO: Replace with npm i @kolkov/ngx-gallery
  // public galleryOptions: NgxGalleryOptions[];
  // public galleryImages: NgxGalleryImage[] = [];
  public static = '../../../../assets/images/objekti/';
  public name: string;
  public innerWidth: number;

  constructor(private route: ActivatedRoute,
              public objectService: ObjectsService,
              public formBuilder: FormBuilder,
              public snackBar: MatSnackBar) {
    this.innerWidth = window.innerWidth;
    // TODO: Replace with npm i @kolkov/ngx-gallery
    /*this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      {
        breakpoint: 400,
        preview: false,
      },
    ];*/
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control([], Validators.required),
      lastName: this.formBuilder.control([], Validators.required),
      phone: this.formBuilder.control([]),
      email: this.formBuilder.control([], [Validators.email, Validators.required]),
      message: this.formBuilder.control([], Validators.required),
    });
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      // .subscribe(
      // (apartment: PropertyModel) => {
      // 	this.apartment = apartment;
      // 	// Increase view count
      // this.apartmentService.update(apartment, {
      // viewCount: ++apartment.viewCount,
      // }).subscribe();
      // 	if (apartment.images != null) {
      // 	apartment.images.forEach((image: ImagesModel) => {
      // 		this.galleryImages.push({
      // 		small: this.static + image.url,
      // 		medium: this.static + image.url,
      // 		big: this.static + image.url,
      // 		});
      // 	});
      // 	}
      // });
      if (params) {
        this.apartment = this.objectService.getObject(params['id']);
        if (this.apartment.images != null) {
          return;
          // TODO: Replace with npm i @kolkov/ngx-gallery
          /*this.apartment.images.forEach((image: Image) => {
            this.galleryImages.push({
              small: this.static + image.medium,
              medium: this.static + image.medium,
              big: this.static + image.medium
            });
          });*/
        }
      }
    });
  }

  public sendEmail(): void {
    // const name = this.form.get('firstName');
    // if (name != null) {
    // 	this.name = name.value;
    // }
    // this.contactService.sendMail(this.form.value)
    // 	.subscribe(() => {
    // 	this.snackBar.open(`Poruka koju je poslao korisnik ${this.name} je uspesno poslata!`, '', {
    // 		duration: 5000,
    // 	});
    //
    // 		this.resetForm(this.form);
    // 	}
    // 	);
  }

  public resetForm(formGroup: FormGroup): void {
    let control: AbstractControl;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.innerWidth = window.innerWidth;
  }
}
