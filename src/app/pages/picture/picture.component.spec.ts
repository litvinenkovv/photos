import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureComponent } from './picture.component';
import { PhotosService } from '../../services/photos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../modules/material.module';
import { Router } from '@angular/router';
describe('PictureComponent', () => {
  let component: PictureComponent;
  let fixture: ComponentFixture<PictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule
    ],
      providers: [PhotosService],
    });
    fixture = TestBed.createComponent(PictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should exit the function if id is not specified', () => {
    let result = component.perfornAction(undefined);
    console.log('result', result);
    expect(result).not.toBeDefined();

  })

  it ('should add to favorites', () => {
    let spy = spyOn(component, 'addToFavorites');
    component.isAddToFavorites = true;
    component.perfornAction("123");
    expect(spy).toHaveBeenCalled();
    expect(component.isAddToFavorites).toBeTruthy();
    // expect(result).toBeDefined();
  })

  it ('should delete from favorites', () => {
    let spy = spyOn(component, 'deleteFromFavorites');
    component.isDeleteFromFavorites = true;
    component.perfornAction("123");
    expect(spy).toHaveBeenCalled();
    expect(component.isDeleteFromFavorites).toBeTruthy();
  })

  xit ('should open picture', () => {
    component.isOpenPicture = true;
    component.perfornAction("123");
    expect(component.isOpenPicture).toBeTruthy();
  })

  xit ('should navigare to /photos', () => {
    // inject([Router]),
    let router: Router = new Router;
    const spy = spyOn(router, 'navigate').and.stub();
    component.isOpenPicture = true;
    // let spy = spyOn(component, 'deleteFromFavorites');
    component.perfornAction("123");
    expect(spy).toHaveBeenCalled();
    // expect(component.isOpenPicture).toBeTruthy();
    // expect(spy.call.arguments[0]).toContain('photos/123');
  })

  xit ('should delete from favorites', () => {
    component.isDeleteFromFavorites = true;
    let spy = spyOn(component, 'perfornAction').and.callFake(() => {
        return component.isDeleteFromFavorites;
    });
    component.perfornAction("123");
    expect(spy).toHaveBeenCalled();
  })

  xit ('should open picture', () => {
    component.isOpenPicture = true;
    let spy = spyOn(component, 'perfornAction').and.callFake(() => {
        return component.isOpenPicture;
    });
    component.perfornAction("123");
    expect(component.isOpenPicture).toBeTruthy();
  })

});
