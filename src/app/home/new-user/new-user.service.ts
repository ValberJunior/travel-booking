import { DEFAULT_USERS } from './../../../utils/commons';
import { IUser } from 'src/utils/interfaces';
import { Injectable } from '@angular/core';
import { USERS } from 'src/utils/commons';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  Users: IUser[] = USERS ? JSON.parse(USERS) : DEFAULT_USERS;

  constructor() { }

  createUser(newUser: IUser) {
    this.Users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(this.Users));
    return true
  }

  checkExistingUser(email: string) : boolean{
    let Exists = false;
    this.Users.forEach(
      item => {
        if (item.email === email) {
          Exists = true;
        }
      })
    return Exists;
  }

}
