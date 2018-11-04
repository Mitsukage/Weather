import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnChanges {

  @Input() country;
  @Input() index;
  @Input() length;
  visitedButton = 'Vsited';
  wishButton = 'Wish to go';
  statusBackground = 'antiquewhite';
  statusColor = 'black';
  temperatureBackground = '#5ef57e';
  statusClose = true;

  constructor(private serv: CountriesService) {
  }

  ngOnInit() {
    this.onHotColdCountries();
    this.onCheckVisitedWish();
  }

  ngOnChanges() {
    this.onHotColdCountries();
  }

  onHotColdCountries() {
    switch (true) {
      case this.index < 4:
        this.temperatureBackground = '#6d6dce';
        break;
      case this.index > (this.length - 1 - (this.length % 4 ? this.length % 4 : 4)):
        this.temperatureBackground = 'red';
        break;
      default: this.temperatureBackground = '#5ef57e';
    }
  }

  onCheckVisitedWish() {
    switch (true) {
      case this.country.status === 'visited':
        this.statusBackground = 'grey';
        this.statusColor = 'white';
        break;
      case this.country.status === 'wish to visit':
        this.statusBackground = 'purple';
        this.statusColor = 'white';
        break;
    }
  }

  onVisited() {
    this.changeCountry('visited');
    this.statusBackground = 'grey';
    this.statusColor = 'white';
  }

  onWishToVisit() {
    this.changeCountry('wish to visit');
    this.statusBackground = 'purple';
    this.statusColor = 'white';
  }

  changeCountry(status) {
    this.serv.changeCountry(this.index, status);
    this.country.status = status;
  }

  onRemoveCountry() {
    this.serv.onRemoveCountry(this.index);
  }
}
