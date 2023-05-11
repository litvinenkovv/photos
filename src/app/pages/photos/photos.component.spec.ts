import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

xdescribe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
