import fetchWrapper from "./fetchWrapper";
import { END_POINTS } from "./apiConfig";
import { IStateSignIn, IStateSignUp } from "../interfaces";

export const signUp = async (data: IStateSignUp) => {
  return await fetchWrapper(END_POINTS.SIGN_UP, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const signIn = async (data: IStateSignIn) => {
  return await fetchWrapper(END_POINTS.SIGN_IN, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
