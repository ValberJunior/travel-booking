export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  cpf: string;
}

export interface ILogin {
  user: string;
  password: string
}
