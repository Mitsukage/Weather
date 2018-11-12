import {Component} from '@angular/core';
import {ModalService} from '../modal.service';
import {CountriesService} from '../countries.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  // names
  userTitle = 'User panel';
  userFields = [];

  constructor(private serv: CountriesService, private modal: ModalService) {
    this.userFields = [{
      name: 'Add Country',
      func: () => {
        modal.toggleModalVisibility();
      }
    }, {
      name: 'Refresh All',
      func: () => {
        serv.refreshCountries();
      }
    }];
  }
}
