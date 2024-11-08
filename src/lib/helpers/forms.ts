import { IFormAction, IStateSignUp, IStateSignIn } from "../interfaces";
import {
  FULL_NAME_MIN_CHARS,
  PASSWORD_MIN_CHARS,
  USERNAME_MIN_CHARS,
} from "../constants";
import { ChangeEvent } from "react";
import { signIn, signUp } from "../apiCenter";
import { handleFieldError } from "../apiCenter/errorHandler";

export const checkField = (field: string, value: string, password?: string) => {
  if (!value.trim()) {
    return "This field is required";
  }

  switch (field) {
    case "fullName":
      if (value.length < FULL_NAME_MIN_CHARS) {
        return `At least ${FULL_NAME_MIN_CHARS} characters`;
      }
      if (!value.includes(" ")) {
        return "Enter first and last name";
      }
      return "";

    case "username":
      if (value.length < USERNAME_MIN_CHARS) {
        return `At least ${USERNAME_MIN_CHARS} chars`;
      }
      if (/[A-Z]/.test(value)) {
        return "Username must be lower case";
      }
      return "";

    case "phone":
      if (
        !/^(\+?\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)
      ) {
        return "Invalid phone number";
      }
      return "";

    case "email":
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        return "Invalid email address";
      }
      return "";

    case "password":
    case "signInPassword":
      if (value.length < PASSWORD_MIN_CHARS) {
        return `At least ${PASSWORD_MIN_CHARS} characters`;
      }
      return "";

    case "confirmPassword":
      if (value !== password) {
        return "Passwords do not match";
      }
      return "";

    default:
      return "";
  }
};

export const signUpReducer = (state: IStateSignUp, action: IFormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export const signInReducer = (state: IStateSignIn, action: IFormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export const createHandleChange = (
  dispatch: React.Dispatch<IFormAction>,
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  password?: string,
) => {
  return (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.id;
    const value = e.target.value;
    dispatch({ type: "UPDATE_FIELD", field, value });
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (checkField(field, value, password)) {
        delete newErrors[field];
      }
      return newErrors;
    });
  };
};

export const handleSubmitSignUp = (
  setApiApproval: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  formState: IStateSignUp,
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  password?: string,
) => {
  return async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    Object.entries(formState).forEach(([key, value]) => {
      const error = checkField(key, value, password);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      const result = await signUp(formState);
      console.log(result);
      setIsLoading(false);
      setErrors(await handleFieldError(result));
      if (result.status === "success") setApiApproval(true);
    }
  };
};

export const handleSubmitSignIn = (
  setApiApproval: React.Dispatch<React.SetStateAction<boolean>>,

  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  formState: IStateSignIn,
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  password?: string,
) => {
  return async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    Object.entries(formState).forEach(([key, value]) => {
      const error = checkField(key, value, password);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      const result = await signIn(formState);
      setIsLoading(false);
      setErrors(await handleFieldError(result));
      if (result.status === "success") setApiApproval(true);
    }
  };
};
