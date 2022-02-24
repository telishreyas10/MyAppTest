import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  base64Image: any;

  constructor(private router: Router, private camera: Camera) { }

  navigate() {
    this.router.navigate(['/user-post']);
  }

  openCamera() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });

  }
}
