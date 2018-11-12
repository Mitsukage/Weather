import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {State} from './store/countries.state';
import {AddCountry, LoadCountries, RefreshCountries} from './store/actions/countries.action';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient, private store: Store<State>) {
  }

  loadCountries() {
    this.store.dispatch(new LoadCountries());
    this.store.select('countryPage').subscribe(arr => {
      arr.countries.forEach(el => {
        this.getTempAndCond(el.capital).subscribe(dataArr => {
          el.temp = Number((dataArr.main.temp - 273.15).toFixed(0));
          el.condition = dataArr.weather[0].description;
          this.setSortBy(arr.countries, 'temp');
          localStorage.setItem('countries', JSON.stringify(arr.countries));
        },
          () => {
            el.temp = 20;
            el.condition = 'sun';
            this.setSortBy(arr.countries, 'temp');
            localStorage.setItem('countries', JSON.stringify(arr.countries));
          });
      });
    });
    return this.store.select('countryPage');
  }

  getTempAndCond(capital): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + capital + '&appid=1ad7a80bc7cb88e336a1407c95b3a233');
  }

  refreshCountries() {
    this.store.dispatch(new RefreshCountries());
  }

  setSortBy(countries, key) {
    countries.sort(function (a, b) {
      const keyA = a[key],
        keyB = b[key];
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    });
  }
}
