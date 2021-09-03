import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) },
  // { path: '**', redirectTo : '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
