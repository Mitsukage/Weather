import {Injectable} from '@angular/core';

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

  constructor() {
  }

  set defaultCountries(value: { name: string; capital: string; temp: number; condition: string; status: string }[]) {
    this._defaultCountries = value;
  }

  get defaultCountries(): { name: string; capital: string; temp: number; condition: string; status: string }[] {
    return this._defaultCountries;
  }

  changeCountry(index: number, status: string) {
    this._defaultCountries[index].status = status;
    localStorage.setItem('countries', JSON.stringify(this._defaultCountries));
  }

  onRemoveCountry(index: number) {
    this._defaultCountries.splice(index, 1);
    localStorage.setItem('countries', JSON.stringify(this._defaultCountries));
  }
}
