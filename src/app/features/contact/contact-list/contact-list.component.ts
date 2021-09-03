import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactIndexModel } from '../models/contact-index.model';
import { ContactService } from '../services/contact.service';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  listContacts! : ContactIndexModel[];
  
  constructor(
    private _contactService : ContactService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }
  
  navigateToCreate() {
    this._router.navigate(["contact/create"]);
  }

  navigateToId(route : string, id : number) {
    this._router.navigate([route + id]);
  }

  getContacts() {
    this._contactService.read().subscribe(dataAPI => this.listContacts = dataAPI);
  }
  moreContacts() {

  }
  lessContacts() {
    
  }
  
  deleteContact(id : number) {
    this._contactService.delete(id).subscribe();
  }
}
