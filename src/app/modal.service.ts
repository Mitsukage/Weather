import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalVisible: boolean;

  modalVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor()  {
    this.modalVisibilityChange.subscribe((value) => {
      this.isModalVisible = value;
    });
  }

  toggleModalVisibility() {
    this.modalVisibilityChange.next(!this.isModalVisible);
  }
}
