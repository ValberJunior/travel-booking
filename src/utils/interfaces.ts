export interface IUser {
  fullName: string;
  username:string;
  email: string;
  phone: string;
  password: string;
  cpf: string;
}

export interface ILogin {
  username: string;
  password: string
}

export interface ITravel{
  id: number,
  city: string,
  category: string,
  image: string,
  options: string[],
  class: string[]
}
