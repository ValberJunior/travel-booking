export interface IUser {
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}

export interface ILogin {
  email: string;
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
