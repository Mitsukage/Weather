import {TestBed} from '@angular/core/testing';
import {CountryComponent} from './country.component';


describe('CountryComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent]
    });
  });

  it ('should create component instance', () => {
      const fixture = TestBed.createComponent(CountryComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
  });
});
