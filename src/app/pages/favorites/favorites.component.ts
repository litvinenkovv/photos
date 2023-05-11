import { Component, inject } from '@angular/core';
import { Photos } from '../../interfaces/photos.interface';
import { PhotosService } from '../../services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent {

  favorites: Photos[] = [];

    constructor(private photosService: PhotosService, private router: Router ) { this.favorites = this.photosService.getFavorites(); }

  deleteFavorite(id: string | undefined): void {
    if (id) {
      this.photosService.deleteFavorite(id);
    }
  }

  openPicture(id: string | undefined): void {
    this.router.navigate(['photos', id]);
  }

}
