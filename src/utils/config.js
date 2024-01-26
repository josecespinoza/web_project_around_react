const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button_location_form",
  inactiveButtonClass: "button_status_inactive",
  inputErrorClass: "form__input_status_error",
  errorClass: "form__input-error",
};

const apiConfig = {
  address: "https://around.nomoreparties.co/v1",
  groupId: "web_es_10",
  token: "f0b3f439-acc1-4da4-ab9f-34df2f51e340",
  userInfoResource: "/users/me",
  avatarResource: "/users/me/avatar",
  cardResource: "/cards",
  likeResource: "/cards/likes",
  getMethod: "GET",
  postMethod: "POST",
  putMethod: "PUT",
  patchMethod: "PATCH",
  deleteMethod: "DELETE",
};

export { apiConfig, validationConfig };
