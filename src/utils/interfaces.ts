export interface IUser {
  id?:string,
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  password?: string;
  bookedTickets?: ITravel[];
  creatdAt?:string
}

export interface ILogin {
  email: string;
  password: string
}
export interface ITravel{
  id: string;
  city: string;
  category: string;
  image: string;
  reserve: boolean;
  details:string
}
