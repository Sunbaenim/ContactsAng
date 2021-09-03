import { PhoneIndexModel } from "../phone/models/phone-index.model";

export interface ContactDetailsModel {
    lastName : string;
    firstName : string;
    email : string;
    birthDate? : Date;
    phone : PhoneIndexModel[];
}