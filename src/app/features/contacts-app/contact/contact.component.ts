import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactIndexModel } from './models/contact-index.model';
import { ContactService } from './services/contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts! : ContactIndexModel[];

  constructor(
    private _contactService : ContactService
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this._contactService.getIndex().subscribe(dataAPI => this.contacts = dataAPI);
    console.log("JM est con");
  }
}
