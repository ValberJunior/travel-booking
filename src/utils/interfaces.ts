export interface IUser {
  _id?:string,
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
  _id: string;
  city: string;
  category: string;
  image: string;
  reserve: boolean;
  details:string
}
