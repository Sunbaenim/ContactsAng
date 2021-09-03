import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { PhoneAddModel } from '../phone/models/phone-add.model';
import { PhoneIndexModel } from '../phone/models/phone-index.model';
import { PhoneUpdateModel } from '../phone/models/phone-update.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  baseUrl : string = environment.urlPhoneAPI;

  constructor(
    private _client : HttpClient
  ) { }

  create(form : PhoneAddModel) {
    return this._client.post(this.baseUrl, form);
  }

  read() {
    return this._client.get<PhoneIndexModel[]>(this.baseUrl);
  }

  update(form : PhoneUpdateModel) {
    return this._client.post<PhoneUpdateModel>(this.baseUrl, form);
  }

  delete(id : number) {
    return this._client.delete(this.baseUrl + id);
  }
}
