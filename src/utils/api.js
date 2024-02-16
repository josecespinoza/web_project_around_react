import * as apiHandler from "../helpers/Api";
import { apiConfig } from "./config";

const { address, groupId, token } = apiConfig;
const api = apiHandler.getInstance({ address, groupId, token });

api.getUserInfo = () => {
  api.configRequest({ resource: "users/me" });
  return api.get();
};

api.changeLikeCardStatus = (cardId, isLike) => {
  if (!isLike) {
    api.configRequest({
      resource: `/cards/likes/${cardId}`,
    });
    return api.delete();
  }
  api.configRequest({
    resource: `/cards/likes/${cardId}`,
  });
  return api.put();
};

api.deleteCard = (cardId) => {
  api.configRequest({
    resource: `/cards/${cardId}`,
  });
  return api.delete();
};

api.loadCards = () => {
  api.configRequest({ resource: "cards" });
  return api.get();
};

export { api };
