import { NgModule } from '@angular/core';
import { FavoritesComponent } from '../pages/favorites/favorites.component';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

const favoritesRoutes: Routes = [{ path: '', component: FavoritesComponent }];

@NgModule({
    declarations: [
        FavoritesComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(favoritesRoutes)
    ],
})

export class FavoriteslModule { }
