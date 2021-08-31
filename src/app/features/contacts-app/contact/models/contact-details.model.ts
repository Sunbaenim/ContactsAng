import { PhoneIndexModel } from "../phone/models/phone-index.model";

export interface ContactDetailsModel {
    LastName : string;
    FirstName : string;
    Email : string;
    BirthDate? : Date;
    Phone : PhoneIndexModel[];
}