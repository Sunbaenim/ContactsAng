import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactsAppComponent } from './contacts-app.component';

const routes: Routes = [
  { path: '', component: ContactsAppComponent, children: [
    { path: 'contact', component : ContactComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsAppRoutingModule { }
