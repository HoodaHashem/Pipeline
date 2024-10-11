import { END_POINTS } from "./apiConfig";
import fetchWrapper from "./fetchWrapper";

export const getUserData = async () => {
  return await fetchWrapper(END_POINTS.GET_USER_DATA, {
    method: "GET",
  });
};
