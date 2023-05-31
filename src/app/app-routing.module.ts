import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { ViewComponent } from './pages/view/view.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: "", component: PhotosComponent },
    {
        path: "favorites",
        loadChildren: () => import('./modules/favorites.module').then(m => m.FavoriteslModule)
    },
    { path: "photos/:id", component: ViewComponent },
    { path: "**", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
