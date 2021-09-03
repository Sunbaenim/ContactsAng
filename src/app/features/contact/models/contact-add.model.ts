import { PhoneAddModel } from "../phone/models/phone-add.model";

export interface ContactAddModel {
    lastName : string;
    firstName : string;
    email : string;
    birthDate? : Date;
    phone : PhoneAddModel
}