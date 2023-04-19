export interface IUserSignUp {
	name: string;
	email: string;
	document: string;
  phone: string;
  password: string;
};

export interface IUserLogin {
  email: string;
  password: string;
}