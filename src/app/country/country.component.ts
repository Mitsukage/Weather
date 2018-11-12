import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/countries.state';
import {DeleteCountry, UpdateCountry} from '../store/actions/countries.action';

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

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.onHotColdCountries();
    this.onCheckVisitedWish();
  }

  ngOnChanges() {
    this.onHotColdCountries();
    this.onCheckVisitedWish();
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
      default:
        this.statusBackground = 'antiquewhite';
        this.statusColor = 'black';
    }
  }

  onVisited() {
    this.store.dispatch(new UpdateCountry('visited', this.index));
    this.statusBackground = 'grey';
    this.statusColor = 'white';
  }

  onWishToVisit() {
    this.store.dispatch(new UpdateCountry('wish to visit', this.index));
    this.statusBackground = 'purple';
    this.statusColor = 'white';
  }

  onRemoveCountry() {
    this.store.dispatch(new DeleteCountry(this.country));
  }
}
