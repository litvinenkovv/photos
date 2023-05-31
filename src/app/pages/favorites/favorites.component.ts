import { Component } from '@angular/core';
import { Photos } from '../../interfaces/photos.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent {

    favorites: Photos[] = [];

    constructor(private photosService: PhotosService) {
        this.favorites = this.photosService.getFavorites();
    }
}
