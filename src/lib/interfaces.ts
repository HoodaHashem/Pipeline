import { ReactNode } from "react";

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

export interface IContact {
  src: string;
  contactName: string;
  lastMsg: string;
}

export interface KeyValue {
  [key: string]: string;
}
export interface IModalHeading {
  headingList: string[];
}

export interface IModalType {
  type: "userSettings" | "friends" | string;
  isOpen: boolean;
  close: () => void;
}
export interface IFetchWrapper {
  url: string;
  options: RequestInit;
}
export interface IUserData {
  fullName: string;
  username: string;
  phone: string;
  email: string;
  photo: string;
}

export interface IUserSettingsInput {
  defaultValue: string;
  isLoading: boolean;
  value: string;
  name: "fullName" | "username" | "phone" | "email";
}

export interface ITextLoader {
  w: string;
  h: string;
}
