import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsAppRoutingModule } from './contacts-app-routing.module';
import { ContactsAppComponent } from './contacts-app.component';
import { ContactComponent } from './contact/contact.component';
import { PhoneComponent } from './contact/phone/phone.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactComponent,
    PhoneComponent
  ],
  imports: [
    CommonModule,
    ContactsAppRoutingModule,
  ]
})
export class ContactsAppModule { }
