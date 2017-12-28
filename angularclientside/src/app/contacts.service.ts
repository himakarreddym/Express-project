import { Contact } from './contactmodel';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  // Get contacts

  getContacts() {
      return this.http.get('http://localhost:3000/api/contacts')
      .map(res => res.json());
  }

// Add contacts

   addContacts(newContact) {
    var newheader = new Headers();
    newheader.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers: newheader})
    .map(res => res.json());
}

}
