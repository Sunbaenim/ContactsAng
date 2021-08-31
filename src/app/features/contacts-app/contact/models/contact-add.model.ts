import { PhoneAddModel } from "../phone/models/phone-add.model";

export interface ContactAddModel {
    LastName : string;
    FirstName : string;
    Email : string;
    BirthDate? : Date;
    Phone : PhoneAddModel;
}