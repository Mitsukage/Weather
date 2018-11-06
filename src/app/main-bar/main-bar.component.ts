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
    this.countries = serv.currentCountries;
  }
}
