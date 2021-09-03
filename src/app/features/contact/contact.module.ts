import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { PhoneComponent } from './phone/phone.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactUpdateComponent,
    PhoneComponent,
    ContactCreateComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContactModule { }
