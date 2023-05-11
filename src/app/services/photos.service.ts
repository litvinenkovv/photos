import { Injectable } from '@angular/core';
import { Photos, Photos2 } from '../interfaces/photos.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  page = 1;

  isLoading: boolean = false;

  idCounter: number = 0;

  photos: Photos[] = [];

  favorites: Photos[] = [];

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
    this.loadPhotos();
    this.loadFavoritesFromStorage();
  }

  addPhotos(data: Photos2[]): void {
    if (data.length === 0) {
      console.log('no image has been uploaded');
      return;
    }
    data.forEach((value) => {
      const newPhoto: Photos = { id: value.id, url: value.download_url };
      this.photos.push(newPhoto);
    });
  }

  loadPhotos(): void {
    const ms = this.randomInterval(200, 300);
    this.isLoading = true;
    setTimeout(() => {
      this.http
        .get<Photos2[]>(
          `https://picsum.photos/v2/list?page=${this.page}2&limit=20`
        )
        .subscribe((data) => {
          this.addPhotos(data);
          if (this.page === 7) {
            this.page = 1;
          } else {
            this.page++;
          }
        });
      this.isLoading = false;
    }, ms);
  }

  getIsLoading(): boolean {
    return this.isLoading;
  }

  getPhotos(): Photos[] {
    return this.photos;
  }

  addFavorites(id: string): void {
    const index = this.photos.findIndex((value) => value.id === id);
    if (index !== -1) {
      const favIndex = this.favorites.findIndex((value) => value.id === id);
      if (favIndex !== -1) return;
      this.favorites.push(this.photos[index]);
    }
  }

  getUrlById(id: string): string {
    const index = this.favorites.findIndex((value) => value.id === id);
    if (index !== -1) {
      return this.favorites[index].url;
    }
    return '';
  }

  saveFavoritesToStorage(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavoritesFromStorage(): void {
    const item: string | null = localStorage.getItem('favorites');
    if (item) {
      this.favorites = JSON.parse(item);
    }
  }

  deleteFavorite(id: string): void {
    const index = this.favorites.findIndex((value) => value.id === id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavoritesToStorage();
    }
  }

  getFavorites(): Photos[] {
    return this.favorites;
  }

  randomInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
