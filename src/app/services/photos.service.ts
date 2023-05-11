import { Injectable } from '@angular/core';
import { Photos, WebPhotos } from '../interfaces/photos.interface';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PhotosService {
    page = 1;
    isLoading: boolean = false;
    isLoading$: Subject<boolean> = new Subject;
    noDataLoaded$: Subject<void> = new Subject;
    photos: Photos[] = [];
    favorites: Photos[] = [];

    constructor(private http: HttpClient) {
        this.loadPhotos();
        this.loadFavoritesFromStorage();
        this.isLoading$.next(this.isLoading);
    }

    addPhotos(data: WebPhotos[]): void {
        if (data.length === 0) {
            console.log('No image has been uploaded', this.page);
            this.noDataLoaded$.next();
            this.page = 0;
        } else {
            data.forEach((value) => {
                const newPhoto: Photos = { id: value.id, url: value.download_url };
                this.photos.push(newPhoto);
            });
        }
        this.isLoading = false;
        this.isLoading$.next(this.isLoading);
        if (this.page === 7) {
            this.page = 1;
        } else {
            this.page++;
        }
    }

    loadPhotos(): void {
        if (this.isLoading) return;
        const ms = this.randomInterval(200, 300);
        this.isLoading = true;
        this.isLoading$.next(this.isLoading);
        setTimeout(() => {
            this.http
                .get<WebPhotos[]>(
                    `https://picsum.photos/v2/list?page=${this.page}2&limit=20`
                )
                .subscribe((data) => {
                    this.addPhotos(data);

                });
        }, ms);
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

    getFavoritesUrlById(id: string): string {
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
