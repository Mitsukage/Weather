import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/countries.state';
import {Observable} from 'rxjs';
import {Countries} from '../models/country.model';
import {LoadCountries, UpdateCountry} from '../store/actions/countries.action';
import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})

export class MainBarComponent implements OnInit {
  // names
  iconName = 'search';
  searchCountry = '';
  // countries array
  public countries: Observable<Countries>;

  constructor(private store: Store<State>, private serv: CountriesService) {
  }

  ngOnInit() {
    this.countries = this.serv.loadCountries();
  }
}
