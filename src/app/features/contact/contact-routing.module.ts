import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
   {path: '', component: ContactComponent, children: [
    { path: 'create', component : ContactCreateComponent },
    { path: 'list', component : ContactListComponent },
    { path : 'details/:id', component : ContactDetailsComponent },
    { path: 'update/:id', component : ContactUpdateComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
