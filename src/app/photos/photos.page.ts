import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  imageSource1: any;
  imageSource2: any;
  imageSource3: any;
  photoTitles: string[] = ['', '', ''];
  photoDates: string[] = ['', '', ''];

  constructor(private router: Router) {}

  redirigirAHome() {
    this.router.navigate(['/home']);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    let index = -1;

    const title = prompt('Ingrese un título para la foto:');

    if (title) {
      if (!this.imageSource1) {
        this.imageSource1 = image.dataUrl;
        index = 0;
      } else if (!this.imageSource2) {
        this.imageSource2 = image.dataUrl;
        index = 1;
      } else if (!this.imageSource3) {
        this.imageSource3 = image.dataUrl;
        index = 2;
      }

      if (index >= 0 && index < this.photoTitles.length) {
        this.photoTitles[index] = title;
        this.photoDates[index] = this.getCurrentDate();
      }
    }
  }

  getCurrentDate(): string {
    const now = new Date();
    return now.toLocaleString();
  }

  ngOnInit() {
  }
}
