import { Injectable } from '@angular/core';
import { StatusSectionEnum } from 'src/utils/enum';
import { ILogin, IUser } from 'src/utils/interfaces';


const CACHE = localStorage.getItem("Session");

@Injectable({
  providedIn: 'root'
})

export class AuthService {

private Users : IUser[] = [{
  fullName: "Admin",
  username: "Admin",
  email: "Admin@teste.com",
  phone: "(21)99999-8888",
  password: "admin@2022",
  cpf: "111.111.111-11",
},
{
    fullName: "Valber",
    username:"Valber",
    email: "valber@teste.com",
    phone: "(21)99999-8888",
    password: "123456",
    cpf: "111.111.111-11",
  }
];

private StatusSession : string = CACHE ? CACHE : StatusSectionEnum.inactive;

newUser : IUser = {
  fullName: "",
  username:"",
  email: "",
  phone: "",
  password: "",
  cpf: "",
}

constructor() { }

authenticate(params:ILogin) : boolean{
  let match = false;
  this.Users.forEach(
    item => {
      if (item.username === params.username && item.password === params.password){
        match = true;
      }
    })
    return match;
}

Session(){
  localStorage.setItem("Session", StatusSectionEnum.active);
  this.StatusSession = StatusSectionEnum.active;
}

Logout(){
  localStorage.setItem("Session", StatusSectionEnum.inactive);
  this.StatusSession = StatusSectionEnum.inactive;
}

CreateUser (newUser: IUser){
  this.Users.push(newUser);
}

}
