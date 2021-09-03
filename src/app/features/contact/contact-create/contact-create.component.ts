import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactIndexModel } from '../models/contact-index.model';
import { ContactService } from '../services/contact.service';
import { birthDateInPresent } from '../validators/birthDateInPresent.validator';

@Component({
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  contactCreateGroup : FormGroup = this._formBuilder.group({});
  contactModel! : ContactIndexModel[];

  constructor(
    private _formBuilder : FormBuilder,
    private _contactService : ContactService
  ) { }

  ngOnInit(): void {
    this.loadContactFormGroup();
  }

  loadContactFormGroup() {
    this.contactCreateGroup = this._formBuilder.group({
      lastName : ["", [Validators.required, Validators.maxLength(50)]],
      firstName : ["", [Validators.required, Validators.maxLength(50)]],
      email : ["", [Validators.required, Validators.email, Validators.maxLength(255)]],
      birthDate : [null, [birthDateInPresent]],
      phone : this._formBuilder.group({
        contactId : [0],
        type : ["", [Validators.required, Validators.maxLength(25)]],
        number : ["", [Validators.required, Validators.maxLength(25)]]
      })
    });
  }

  addContact() {
    this._contactService.create(this.contactCreateGroup.value).subscribe(() => {
      this._contactService.read().subscribe(data => this.contactModel = data);
    });
  }
}
