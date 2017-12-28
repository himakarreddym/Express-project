import { Contact } from './../contactmodel';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService],
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: number;
  constructor(private contservive: ContactsService) { }

  // creating new contact
  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    };
    this.contservive.addContacts(newContact)
    .subscribe( contact => {
      this.contacts.push(contact);
    });
    this.contservive.getContacts()
    .subscribe(contacts =>
    this.contacts = contacts);
  }

  ngOnInit() {
    this.contservive.getContacts()
    .subscribe(contacts =>
    this.contacts = contacts);
  }

}
