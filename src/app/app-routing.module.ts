import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ViewComponent } from './pages/view/view.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: "", component: PhotosComponent},
  {path: "favorites", component: FavoritesComponent},
  {path: "photos/:id", component: ViewComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
