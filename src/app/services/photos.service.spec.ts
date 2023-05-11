import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotosService]
    });
    service = TestBed.inject(PhotosService);
  });

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule],
  //   providers: [PhotosService]
  // }));

  it('should be created', () => {
    // service = TestBed.inject(PhotosService);
    expect(service).toBeTruthy();
  });

  it('(number) should be greater or equal then 200', () => {
    let res = service.randomInterval(200, 300);
    expect(res).toBeGreaterThanOrEqual(200);
   });

   it('(number) should be less or equal then 300', () => {
    let res = service.randomInterval(200, 300);
    expect(res).toBeLessThanOrEqual(300);
   });

  // it('should be created', () => {
  //   const service: myService = TestBed.get(myService);
  //   expect(service).toBeTruthy();
  //  });

});
