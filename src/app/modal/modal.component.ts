import {Component} from '@angular/core';
import {CountriesService} from '../countries.service';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  nameCountry = '';
  capitalCountry = '';
  constructor(private serv: CountriesService, private modal: ModalService) {
  }

  get showModal(): boolean {
    return this.modal.isModalVisible;
  }

  AddCountry() {
    if (this.nameCountry && this.capitalCountry) {
      this.serv.getTempAndCond(this.capitalCountry).subscribe((data) => {
        this.serv.addCountry({
          name: this.nameCountry,
          capital: this.capitalCountry,
          temp: Number((data.main.temp - 273.15).toFixed(0)),
          condition: data.weather[0].description,
          status: 'neutral'
        });
        this.nameCountry = '';
        this.capitalCountry = '';
        this.modal.toggleModalVisibility();
      },
        error => alert('Capital not found!'));
    } else {
      alert ('Empty fields!');
    }
  }

  CancelModal() {
    this.modal.toggleModalVisibility();
  }

}
