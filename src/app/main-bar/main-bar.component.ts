import {Component} from '@angular/core';
import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent {
  // names
  iconName = 'search';
  searchCountry = '';
  // countries array
  countries = [];
  constructor(private serv: CountriesService) {
    const countries = localStorage.getItem('countries');
    if (countries) {
      this.serv.defaultCountries = JSON.parse(countries);
      this.countries = this.serv.defaultCountries;
    } else {
      this.countries = serv.defaultCountries;
      localStorage.setItem('countries', JSON.stringify(this.countries));
    }
  }
}
