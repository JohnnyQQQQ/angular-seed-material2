import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { HomeComponent } from './home.component';
import { NameListService } from '../shared/name-list/name-list.service';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function main() {
  describe('Home component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule, MaterialModule, BrowserAnimationsModule],
        declarations: [HomeComponent],
        providers: [
          { provide: NameListService, useValue: new MockNameListService() }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(HomeComponent);
            let homeInstance = fixture.debugElement.componentInstance;
            let homeDOMEl = fixture.debugElement.nativeElement;
            let mockNameListService =
              fixture.debugElement.injector.get<any>(NameListService) as MockNameListService;
            let nameListServiceSpy = spyOn(mockNameListService, 'get').and.callThrough();

            mockNameListService.returnValue = ['1', '2', '3'];

            fixture.detectChanges();

            expect(homeInstance.nameListService).toEqual(jasmine.any(MockNameListService));
            expect(homeDOMEl.querySelectorAll('md-list-item').length).toEqual(3);
            expect(nameListServiceSpy.calls.count()).toBe(1);

            homeInstance.newName = 'Minko';
            homeInstance.addName();

            fixture.detectChanges();

            expect(homeDOMEl.querySelectorAll('md-list-item').length).toEqual(4);
            expect(homeDOMEl.querySelectorAll('md-list-item h3')[3].textContent).toEqual('Minko');
          });

      }));
  });
}

class MockNameListService {

  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
