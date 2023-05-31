import { Component, Input, OnInit } from '@angular/core';
import { Photos } from '../../interfaces/photos.interface';
import { PhotosService } from '../../services/photos.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

    @Input() photo: Photos | undefined;
    @Input() isAddToFavorites: boolean = false;
    @Input() isDeleteFromFavorites: boolean = false;
    @Input() isOpenPicture: boolean = false;
    @Input() classCover: boolean = true;
    @Input() setMaxHeight: boolean = false;

    constructor(private photosService: PhotosService, private _snackBar: MatSnackBar, private router: Router) { }

    ngOnInit(): void { }

    perfornAction(id: string | undefined): void {
        if (!id) return;
        if (this.isAddToFavorites) {
            this.addToFavorites(id);
        } else if (this.isDeleteFromFavorites) {
            this.deleteFromFavorites(id);
        } else if (this.isOpenPicture) {
            this.router.navigate(['photos', id]);
        }
    }

    addToFavorites(id: string): void {
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

    deleteFromFavorites(id: string) {
        this.photosService.deleteFavorite(id);
        this._snackBar.open(
            `Picture has been removed from Favorites`,
            "OK",
            {
                duration: 3000,
                verticalPosition: "top",
                horizontalPosition: "right"
            }
        );
        this.router.navigate(['/favorites']);
    }
}
