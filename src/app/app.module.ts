import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ViewComponent } from './pages/view/view.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        PhotosComponent,
        ViewComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
