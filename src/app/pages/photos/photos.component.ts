import { PhotosService } from '../../services/photos.service';
import { Photos } from './../../interfaces/photos.interface';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  loadBottomZone = 32;
  photos: Photos[] = [];
  favorites: Photos[] = [];
  isLoading: boolean = false;

  constructor(private photosService: PhotosService, private _snackBar: MatSnackBar) {
    this.photos = this.photosService.getPhotos();
    this.favorites = this.photosService.getFavorites();
    this.isLoading = this.photosService.getIsLoading();
  }

  addToFavorites(id: string | undefined): void {
    if (id) {
      this.photosService.addFavorites(id);
      this.photosService.saveFavoritesToStorage();
      this._snackBar.open(
        `Picture added to Favorites`,
        "OK",
        {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "right"
        });
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(): void {
    if (window.scrollY + window.innerHeight + this.loadBottomZone > document.body.scrollHeight) {
      this.photosService.loadPhotos();
    }
  }
}
