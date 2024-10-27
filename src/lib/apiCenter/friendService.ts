import { END_POINTS } from "./apiConfig";
import fetchWrapper from "./fetchWrapper";

export const searchForFriend = async (data: { search: string }) => {
  return await fetchWrapper({
    url: END_POINTS.SEARCH_FOR_FRIEND,
    options: { method: "POST", body: JSON.stringify(data) },
  });
};

export const sendFrindRequest = async (data: string) => {
  return await fetchWrapper({
    url: `${END_POINTS.SEND_FRIEND_REQUEST}/${data}`,
    options: { method: "POST" },
  });
};
