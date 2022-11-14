import { AbstractControl } from "@angular/forms";
import { DEFAULT_USERS, USERS } from "src/utils/commons";
import { IUser } from "src/utils/interfaces";

export function userExistsValidator(control: AbstractControl) {
  const email = control.value as string;

  if(CheckExistingUser(email)) return { existingUser : true};
  return null;
}

function CheckExistingUser(email: string) : boolean{
  const Users : IUser[] = USERS ? JSON.parse(USERS) : DEFAULT_USERS;
  let Exists = false;
  Users.forEach(
    item => {
      if (item.email === email) {
        Exists = true;
      }
    })
  return Exists;
}
