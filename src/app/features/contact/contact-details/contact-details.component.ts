import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactDetailsModel } from '../models/contact-details.model';
import { PhoneIndexModel } from '../phone/models/phone-index.model';
import { ContactService } from '../services/contact.service';
import { PhoneService } from '../services/phone.service';

@Component({
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
 
  indexFromRoute! : number;
  contactDetails! : ContactDetailsModel;
  contactPhones! : PhoneIndexModel[];

  constructor(
    private _contactService : ContactService,
    private _phoneService : PhoneService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indexFromRoute = this._activatedRoute.snapshot.params["id"];
    this.getContactDetails();
    this.getContactPhones();
    this.contactDetails.phone = this.contactPhones;
  }

  getContactDetails() {
    this._contactService.detail(this.indexFromRoute).subscribe(dataAPI => this.contactDetails = dataAPI);
  }

  getContactPhones() {
    this._phoneService.read().subscribe(dataAPI => this.contactPhones = dataAPI);
  }

  getAge() : number {
    if (this.contactDetails.birthDate) return new Date().getFullYear() - new Date(this.contactDetails.birthDate).getFullYear();
    return 0;
  }
}
