import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service'; // Needs to be imported to use the class in TS in the constructor (necessary for TypeScript)
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{
  contacts: Observable<Contact[]>;

  trackByContactId(index, contact){
    //console.log('Tracking by Id: ' + contact.id)
    return contact.id;
  };
  
  constructor(private contactsService: ContactsService){ // using private or public in the constructor creates a property
                                                         // you can use @Inject(ContactsService) contactService to tell Angular to inject the correct type
    //this.contacts = CONTACT_DATA;
    //this.contacts[0].name = 'test';
  }

  //https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  //https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit
  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
    /*
    Mostly we use ngOnInit for all the initialization/deceleration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".
    So You should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved
    */
  }
}
