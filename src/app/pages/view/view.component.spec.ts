import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../modules/material.module';
import { PictureComponent } from '../picture/picture.component';
import { SharedModule } from '../../modules/shared.module';

describe('ViewComponent', () => {
    let component: ViewComponent;
    let fixture: ComponentFixture<ViewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ViewComponent, PictureComponent],
            imports: [AppRoutingModule,
                HttpClientTestingModule,
                MaterialModule,
                SharedModule
            ]
        });
        fixture = TestBed.createComponent(ViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should after ngOnInit id not will be empty string', () => {
        component.id = '123';
        component.ngOnInit();
        expect(component.id).not.toBe('');
    });

    it('sould be onSubmit pressed', () => {
        let spy = spyOn(component, 'onSubmit');
        let result = component.onSubmit("123");
        console.log('spy :>> ', spy);
        expect(spy).toHaveBeenCalled();
        expect(result).toBe(undefined);
    })

});
