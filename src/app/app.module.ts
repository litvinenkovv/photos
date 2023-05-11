import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotosComponent } from './pages/photos/photos.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ViewComponent } from './pages/view/view.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        PhotosComponent,
        FavoritesComponent,
        NotFoundComponent,
        ViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
