import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotosService } from '../../services/photos.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

describe('FavoritesComponent', () => {
    let component: FavoritesComponent;
    let fixture: ComponentFixture<FavoritesComponent>;
    let service: PhotosService;
    let http: HttpClient;
    // let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FavoritesComponent],
            imports: [HttpClientTestingModule, RouterModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        service = new PhotosService(http);
        // router = new Router();
        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be delete from Favotites', () => {
        let val = service.deleteFavorite("123");
        expect(val).toBeUndefined();
    })


});
