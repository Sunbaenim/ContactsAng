import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { ContactIndexModel } from '../models/contact-index.model';
import { ContactAddModel } from '../models/contact-add.model';
import { ContactUpdateModel } from '../models/contact-update.model';
import { ContactDetailsModel } from '../models/contact-details.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl : string = environment.urlContactAPI;

  constructor(
    private _client : HttpClient
  ) { }

  create(form : ContactAddModel) {
    return this._client.post(this.baseUrl, form);
  }

  read() {
    return this._client.get<ContactIndexModel[]>(this.baseUrl);
  }

  detail(id : number) {
    return this._client.get<ContactDetailsModel>(this.baseUrl + id);
  }

  update(form : ContactUpdateModel) {
    return this._client.post<ContactAddModel>(this.baseUrl, form);
  }

  delete(id : number) {
    return this._client.delete(this.baseUrl + id);
  }
}
