import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  // default countries array
  private _defaultCountries = [
    {
      name: 'Albania',
      capital: 'Tirana',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Armenia',
      capital: 'Yerevan',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      temp: 1,
      condition: 'cloud',
      status: 'neutral'
    },
    {
      name: 'Azerbaijan',
      capital: 'Baku',
      temp: 2,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      temp: 3,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Belgium',
      capital: 'Brussels',
      temp: 4,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Bosnia and Herzegovina',
      capital: 'Sarajevo',
      temp: 5,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Bulgaria',
      capital: 'Sofia',
      temp: 6,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Croatia',
      capital: 'Zagreb',
      temp: 20,
      condition: 'cloud',
      status: 'neutral'
    },
    {
      name: 'Czech Republic',
      capital: 'Prague',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Denmark',
      capital: 'Copenhagen',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Finland',
      capital: 'Helsinki',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'France',
      capital: 'Paris',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Georgia',
      capital: 'Tbilisi',
      temp: 20,
      condition: 'cloud',
      status: 'neutral'
    },
    {
      name: 'Germany',
      capital: 'Berlin',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Greece',
      capital: 'Athens',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Hungary',
      capital: 'Budapest',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Iceland',
      capital: 'Reykjavik',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Ireland',
      capital: 'Dublin',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Italy',
      capital: 'Rome',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Kazakhstan',
      capital: 'Astana',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Latvia',
      capital: 'Riga',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Liechtenstein',
      capital: 'Vaduz',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Lithuania',
      capital: 'Vilnius',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Macedonia (FYROM)',
      capital: 'Skopje',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Malta',
      capital: 'Valletta',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Moldova',
      capital: 'Chisinau',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Monaco',
      capital: 'Monaco',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Montenegro',
      capital: 'Podgorica',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Netherlands',
      capital: 'Amsterdam',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Norway',
      capital: 'Oslo',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Poland',
      capital: 'Warsaw',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Portugal',
      capital: 'Lisbon',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Romania',
      capital: 'Bucharest',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Russia',
      capital: 'Moscow',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'San Marino',
      capital: 'San Marino',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Serbia',
      capital: 'Belgrade',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Slovakia',
      capital: 'Bratislava',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Slovenia',
      capital: 'Ljubljana',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Spain',
      capital: 'Madrid',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Sweden',
      capital: 'Stockholm',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Switzerland',
      capital: 'Bern',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Sweden',
      capital: 'Stockholm',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Turkey',
      capital: 'Ankara',
      temp: -5,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Ukraine',
      capital: 'Kyiv',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'United Kingdom',
      capital: 'London',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    },
    {
      name: 'Vatican City (Holy See)',
      capital: 'Vatican City',
      temp: 20,
      condition: 'sun',
      status: 'neutral'
    }
  ];

  // current array of counries
  private _currentCountries = [];

  constructor(private http: HttpClient) {
    const countries = localStorage.getItem('countries');
    if (countries) {
      this.currentCountries = JSON.parse(countries);
    } else {
      localStorage.setItem('countries', JSON.stringify(this.defaultCountries));
      this.currentCountries = this.defaultCountries;
    }
    for (let i = 0; i < this.currentCountries.length; i++) {
      this.getTemperature(this.currentCountries[i].capital)
        .subscribe((data) => {
          this.currentCountries[i].temp = Number((data.main.temp - 273.15).toFixed(0));
          this.currentCountries[i].condition = data.weather[0].description;
          this.setSortBy(this.currentCountries, 'temp');
          localStorage.setItem('countries', JSON.stringify(this.currentCountries));
        },
          error => console.log(error));
    }
  }

  set currentCountries(value: { name: string; capital: string; temp: number; condition: string; status: string }[]) {
    this._currentCountries = value;
  }

  get currentCountries(): { name: string; capital: string; temp: number; condition: string; status: string }[] {
    return this._currentCountries;
  }

  get defaultCountries(): { name: string; capital: string; temp: number; condition: string; status: string }[] {
    return this._defaultCountries;
  }

  getTemperature(capital): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + capital + '&appid=1ad7a80bc7cb88e336a1407c95b3a233');
  }

  // Sort array by
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

  addCountry(country) {
    this._currentCountries.push(country);
    this.setSortBy(this._currentCountries, 'temp');
    localStorage.setItem('countries', JSON.stringify(this._currentCountries));
  }

  changeCountry(index: number, status: string) {
    this._currentCountries[index].status = status;
    localStorage.setItem('countries', JSON.stringify(this._currentCountries));
  }

  refreshCountries() {
    this._currentCountries.splice(0, this._currentCountries.length);
    for (let i = 0; i < this._defaultCountries.length; i++) {
      this._currentCountries.push(this._defaultCountries[i]);
    }
    localStorage.setItem('countries', JSON.stringify(this._currentCountries));
  }

  onRemoveCountry(index: number) {
    this._currentCountries.splice(index, 1);
    localStorage.setItem('countries', JSON.stringify(this._currentCountries));
  }
}
