import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../modules/material.module';

describe('ViewComponent', () => {
    let component: ViewComponent;
    let fixture: ComponentFixture<ViewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ViewComponent],
            imports: [AppRoutingModule, HttpClientTestingModule, MaterialModule]
        });
        fixture = TestBed.createComponent(ViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
