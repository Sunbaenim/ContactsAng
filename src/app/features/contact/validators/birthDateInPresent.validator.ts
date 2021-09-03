import { AbstractControl, ValidatorFn } from "@angular/forms";

export function birthDateInPresent() : ValidatorFn {
    return (control : AbstractControl) => {
        if (control.value == null) return null;
        if (new Date(control.value).getFullYear() > new Date().getFullYear()) return {InvalidDate : "Veuillez saisir une date valide."}
        return null;
    };
}