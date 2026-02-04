import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IPhoto } from '../interfaces/iphoto.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  public photos: IPhoto[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        allowEditing: true,
        quality: 100,
      });

      this.photos.unshift({
        webviewPath: capturedPhoto.webPath,
      })
  }

  public deletePhoto(index: number){
    this.photos.splice(index, 1);
  }
  
}
