import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';

@Injectable() // this will tell TypeScript to add the metadata to the generated javascript which Angular uses to be able to inject stuff
              // any decorator will do, so @Component or even @foo would generate the metadata as well
              // these decorators are defined by Angular (but you can write your own)
              // Injectable doesn't do anything anymore apart from that 
export class ContactsService {

  API_ENDPOINT: string = 'http://localhost:4201';

  constructor(private http: Http) { }

  getContacts(){
    //return CONTACT_DATA;
    return this.http.get(this.API_ENDPOINT + '/api/contacts')
      .map(res => res.json())
      .map(data => data.items);
  }

  getContactById(id: number | string){
    //return CONTACT_DATA.find(contact => contact.id == id);
    return this.http.get(this.API_ENDPOINT + '/api/contacts/' + id)
      .map(res => res.json())
      .map(data => data.item);
  }
}
