import { END_POINTS } from "./apiConfig";
import fetchWrapper from "./fetchWrapper";

export const createNewChat = async (data: { receiverId: string }) => {
  return await fetchWrapper({
    url: END_POINTS.CREATE_NEW_CHAT,
    options: { method: "POST", body: JSON.stringify(data) },
  });
};

export const getExistingChat = async (data: { id: string }) => {
  return await fetchWrapper({
    url: END_POINTS.GET_OLD_CHAT,
    options: { method: "POST", body: JSON.stringify(data) },
  });
};
