import { Component } from '@angular/core';

// Every component has a view
@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works, I think!';
}
