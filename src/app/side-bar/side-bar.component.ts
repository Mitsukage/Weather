import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  // names
  userTitle = 'User panel';
  userFields = ['Add city', 'Refresh All'];
}
