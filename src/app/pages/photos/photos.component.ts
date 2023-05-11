import { Subscription } from 'rxjs';
import { PhotosService } from '../../services/photos.service';
import { Photos } from './../../interfaces/photos.interface';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnDestroy {
    loadBottomZone = 32;
    photos: Photos[] = [];
    isLoading: boolean = false;
    isLoadingSub: Subscription = new Subscription;
    noDataLoadedSub: Subscription = new Subscription;

    constructor(private photosService: PhotosService, private _snackBar: MatSnackBar) {
        this.photos = this.photosService.getPhotos();
        this.isLoadingSub = this.photosService.isLoading$.subscribe((value) => this.isLoading = value);
        this.noDataLoadedSub = this.photosService.noDataLoaded$.subscribe(() => this.noDataLoadedMessage());
    }

    ngOnDestroy(): void {
        this.isLoadingSub.unsubscribe();
        this.noDataLoadedSub.unsubscribe();
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

    noDataLoadedMessage() {
        this._snackBar.open(
            `No data loaded. Please scroll the page.`,
            "OK",
            {
                duration: 3000,
                verticalPosition: "top",
                horizontalPosition: "right"
            });
    }

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(): void {
        if (window.scrollY + window.innerHeight + this.loadBottomZone > document.body.scrollHeight) {
            this.photosService.loadPhotos();
        }
    }

}
