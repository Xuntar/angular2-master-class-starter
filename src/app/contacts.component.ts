import { Component } from '@angular/core';

// Every component has a view
@Component({
  selector: 'trm-contacts-app',
  //templateUrl: 'contacts.component.html', ==> you can choose an inline template or templatefile
  template: '<trm-contacts-header></trm-contacts-header>',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works, I think!';
}
