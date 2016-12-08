import { Component } from '@angular/core';
import { Contact } from './models/contact'

// Every component has a view
@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html', //==> you can choose an inline template or templatefile
  //template: '<trm-contacts-header></trm-contacts-header>',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works, I think!';
  contact: Contact = {
    id: 7,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    image: '/assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  }
}
