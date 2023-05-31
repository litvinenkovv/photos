import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PhotosService } from '../../services/photos.service';
import { Photos, WebPhotos } from './../../interfaces/photos.interface';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PhotosComponent implements OnInit, OnDestroy {
    loadBottomZone = 32;
    // getPhotos$: Observable<WebPhotos[]> = new Observable<WebPhotos[]>;
    photos: Photos[] = [];
    photos$: BehaviorSubject<Photos[]> = new BehaviorSubject(this.photos);
    isLoading: boolean = false;
    isLoadingSub: Subscription = new Subscription;
    noDataLoadedSub: Subscription = new Subscription;
    getPhotosSub: Subscription = new Subscription;

    constructor(private photosService: PhotosService, private _snackBar: MatSnackBar) {
        this.isLoadingSub = this.photosService.isLoading$.subscribe((value) => this.isLoading = value);
        this.noDataLoadedSub = this.photosService.noDataLoaded$.subscribe(() => this.noDataLoadedMessage());
    }

    ngOnInit(): void {
        this.photos$ = this.photosService.photos$
    }

    ngOnDestroy(): void {
        if (this.isLoadingSub)  {
            this.isLoadingSub.unsubscribe();
        }
        if (this.noDataLoadedSub) {
            this.noDataLoadedSub.unsubscribe();
        }
        if (this.getPhotosSub) {
            this.getPhotosSub.unsubscribe();
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

    trackByFn(index: number, item: Photos) {
        return index;
    }

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(): void {
        if (window.scrollY + window.innerHeight + this.loadBottomZone > document.body.scrollHeight) {
            this.photosService.loadPhotos();
        }
    }

    // @HostListener('window:')

}
