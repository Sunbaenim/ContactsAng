import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContactIndexModel } from '../models/contact-index.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl : string = environment.urlContactsAPI;

  constructor(
    private _client : HttpClient
  ) { }

  getIndex() {
    return this._client.get<ContactIndexModel[]>(this.baseUrl + "contact");
  }
}
