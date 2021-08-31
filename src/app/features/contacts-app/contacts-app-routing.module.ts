import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsAppComponent } from './contacts-app.component';

const routes: Routes = [{ path: '', component: ContactsAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsAppRoutingModule { }
