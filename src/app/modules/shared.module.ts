import { NgModule } from "@angular/core";
import { PictureComponent } from "../pages/picture/picture.component";
import { MaterialModule } from "./material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgOptimizedImage } from '@angular/common'

@NgModule({
    declarations: [PictureComponent],
    imports: [
        MaterialModule,
        NgOptimizedImage
    ],
    exports: [
        PictureComponent,
        MaterialModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class SharedModule { }
