import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;
  id: number | string;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.contact = this.contactsService.getContactById(this.id);
  }

}
