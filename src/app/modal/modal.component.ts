import {Component} from '@angular/core';
import {ModalService} from '../modal.service';
import {Country} from '../models/country.model';
import {Store} from '@ngrx/store';
import {State} from '../store/countries.state';
import {AddCountry} from '../store/actions/countries.action';
import {CountriesService} from '../countries.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  nameCountry = '';
  capitalCountry = '';

  constructor(private serv: CountriesService, private modal: ModalService, private store: Store<State>) {
  }

  get showModal(): boolean {
    return this.modal.isModalVisible;
  }

  AddCountry() {
    if (this.nameCountry && this.capitalCountry) {
      const country = new Country(this.nameCountry, this.capitalCountry, 20, 'sun', 'neutral');
      this.serv.getTempAndCond(country).subscribe(dataArr => {
          country.temp = Number((dataArr.main.temp - 273.15).toFixed(0));
          country.condition = dataArr.weather[0].description;
          this.store.dispatch(new AddCountry(country));
          this.nameCountry = '';
          this.capitalCountry = '';
          this.modal.toggleModalVisibility();
        },
        () => alert('Unknown capital!'));
    } else {
      alert('Empty fields!');
    }
  }

  CancelModal() {
    this.modal.toggleModalVisibility();
  }

}
