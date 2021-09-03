import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactIndexModel } from '../models/contact-index.model';
import { PhoneAddModel } from '../phone/models/phone-add.model';
import { ContactService } from '../services/contact.service';
import { PhoneService } from '../services/phone.service';
import { birthDateInPresent } from '../validators/birthDateInPresent.validator';

@Component({
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.scss']
})
export class ContactUpdateComponent implements OnInit {

  contactCreateGroup : FormGroup = this._formBuilder.group({});
  phoneCreateGroup : FormGroup = this._formBuilder.group({});
  contactModel! : ContactIndexModel[];
  phoneModel! : PhoneAddModel[];
  indexFromRoute! : number;

  constructor(
    private _formBuilder : FormBuilder,
    private _contactService : ContactService,
    private _phoneService : PhoneService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indexFromRoute = this._activatedRoute.snapshot.params["id"];
    this.loadContactFormGroup();
    this.loadPhoneFormGroup();
  }

  getPhoneArray() {
    return this.phoneCreateGroup.get("phoneList") as FormArray;
  }
  addControlToArray() {
    this.getPhoneArray().push(new FormControl("", Validators.required))
  }
  loadContactFormGroup() {
    this.contactCreateGroup = this._formBuilder.group({
      lastName : ["", [Validators.required, Validators.maxLength(50)]],
      firstName : ["", [Validators.required, Validators.maxLength(50)]],
      email : ["", [Validators.required, Validators.email, Validators.maxLength(255)]],
      birthDate : [null, [birthDateInPresent]],
      phone : this._formBuilder.group({
        contactId : [this.indexFromRoute],
        type : ["", [Validators.required, Validators.maxLength(25)]],
        number : ["", [Validators.required, Validators.maxLength(25)]]
      })
    });
  }

  loadPhoneFormGroup() {
    this.phoneCreateGroup = this._formBuilder.group({
      phoneList : this._formBuilder.array(this.phoneModel)
    });
  }

  updateContact() {
    this._contactService.update(this.contactCreateGroup.value).subscribe(() => {
      this._contactService.read().subscribe(data => this.contactModel = data);
    }); 
  }

  updatePhone() {
      
  }

}
