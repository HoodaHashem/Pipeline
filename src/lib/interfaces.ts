export interface IStateSignUp {
  fullName: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IStateSignIn {
  userIdentifier: string;
  signInPassword: string;
}

export interface IFormAction {
  type: "UPDATE_FIELD";
  field: string;
  value: string;
}

export interface IApiFeildError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

export interface IApiErrorResponse {
  status: "fail" | "success" | "error";
  errors: IApiFeildError[];
}

export interface IAvatar {
  src: string;
  alt: string;
  size: string;
}

export interface IAvatarSize {
  [key: string]: string;
}
