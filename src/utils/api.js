import Api from "../helpers/Api.js";
import { apiConfig } from "./config";

const { address, groupId, token } = apiConfig;

let apiHandler;

const getInstance = ({ address, groupId, token }) => {
  if (!apiHandler) {
    apiHandler = new Api({ address, groupId, token });
  }
  apiHandler._updateOptions({ address, groupId, token });
  return apiHandler;
};

const api = getInstance({ address, groupId, token });

api.getUserInfo = () => {
  api.configRequest({ resource: "users/me" });
  return api.get();
};

api.setUserInfo = (name, about) => {
  api.configRequest({
    resource: "users/me",
    body: { name, about },
  });
  return api.patch();
};

api.setUserAvatar = (imageUrl) => {
  api.configRequest({
    resource: "/users/me/avatar",
    body: { avatar: imageUrl },
  });
  return api.patch();
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

api.addCard = (title, imageUrl) => {
  api.configRequest({
    resource: "/cards",
    body: { name: title, link: imageUrl },
  });
  return api.post();
};

api.deleteCard = (cardId) => {
  api.configRequest({
    resource: `/cards/${cardId}`,
  });
  return api.delete();
};

api.getCardList = () => {
  api.configRequest({ resource: "cards" });
  return api.get();
};

export default api;
