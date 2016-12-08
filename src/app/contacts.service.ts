import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';

@Injectable() // this will tell TypeScript to add the metadata to the generated javascript which Angular uses to be able to inject stuff
              // any decorator will do, so @Component or even @foo would generate the metadata as well
export class ContactsService {

  constructor() { }

  getContacts(){
    return CONTACT_DATA;
  }
}
