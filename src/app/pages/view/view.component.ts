import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PhotosService } from '../../services/photos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Photos } from '../../interfaces/photos.interface';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    picture: Photos | undefined ;
    id: string = "";
    url: string = "";

    form = new FormGroup({});

    constructor(private route: ActivatedRoute, private router: Router, private photosService: PhotosService, private _snackBar: MatSnackBar) {

        this.route.paramMap.pipe(
            switchMap(params => params.getAll('id'))
        )
            .subscribe(data => this.id = data);
    }

    ngOnInit(): void {

        if (this.id) {
            this.url = this.photosService.getFavoritesUrlById(this.id);
            this.picture = { id: this.id, url: this.url };
        }
    }

    onSubmit(id: string): void {
        if (id) {
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

}
