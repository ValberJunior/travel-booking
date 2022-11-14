import { IUser } from 'src/utils/interfaces';
export const CACHE = localStorage.getItem("Session");

export const USERS = localStorage.getItem("Users");

export const DEFAULT_USERS : IUser[] = [{
  fullName: "Admin",
  email: "admin@teste.com",
  phone: "(21)99999-8888",
  password: "admin@2022",
  cpf: "111.111.111-11",
},
{
    fullName: "Valber",
    email: "valber@teste.com",
    phone: "(21)99999-8888",
    password: "123456",
    cpf: "111.111.111-11",
  }
];
