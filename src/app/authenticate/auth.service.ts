import { Injectable } from '@angular/core';
import { StatusSectionEnum } from 'utils/enum';
import { ILogin, IUser } from 'utils/interfaces';


const CACHE = localStorage.getItem("Session");

@Injectable({
  providedIn: 'root'
})

export class AuthService {

private Users : IUser[] = [{
  name: "Admin",
  email: "Admin@teste.com",
  phone: "(21)99999-8888",
  password: "admin@2022",
  cpf: "111.111.111-11",
}];

private StatusSession : string = CACHE ? CACHE : StatusSectionEnum.inactive;

newUser : IUser = {
  name: "",
  email: "",
  phone: "",
  password: "",
  cpf: "",
}

constructor() { }

authenticate(params:ILogin): boolean {
  if (this.ValidateCredendial(params)) return true;
  return false;
}

private ValidateCredendial ({user,password}:ILogin) : boolean {
  this.Users.forEach(
    item => {
      if (item.name === user && item.password === password) return true;
    }
  )
  return false;
}

CreateUser (newUser: IUser){
  this.Users.push(newUser);
}

Session(){
  localStorage.setItem("Session", StatusSectionEnum.active);
  this.StatusSession = StatusSectionEnum.active;
}

Logout(){
  localStorage.setItem("Session", StatusSectionEnum.inactive);
  this.StatusSession = StatusSectionEnum.inactive;
}

}
