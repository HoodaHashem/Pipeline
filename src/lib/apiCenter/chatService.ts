import { KeyValue } from "../interfaces";
import { END_POINTS } from "./apiConfig";
import fetchWrapper from "./fetchWrapper";

export const createNewChat = async (data: { ids: string[]; type: 'direct' | 'group'}) => {
  return await fetchWrapper({
    url: END_POINTS.CREATE_NEW_CHAT,
    options: { method: "POST", body: JSON.stringify(data) },
  });
};
