import { useState, useContext, useEffect } from "react";
import InputSet from "./InputSet";
import Form from "./Form";
import { api } from "../utils/api";
import { PopupWithFormContext } from "./PopupWithFormContext";

function EditAvatarForm({ currentUser }) {
  const [imageUrl, setImageUrl] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Guardar");

  const handleSubmit = useContext(PopupWithFormContext);

  useEffect(() => {
    if (currentUser) {
      setImageUrl(currentUser.avatar);
    }
  }, []);

  function handleFormSubmit(evt) {
    setButtonLabel("Guardando...");
    api.configRequest({
      resource: "/users/me/avatar",
      body: { avatar: imageUrl },
    });
    api
      .patch()
      .then((res) => {
        handleSubmit(res);
      })
      .catch(console.error("There was an error"));
  }

  function handleChange(inputName, inputValue) {
    inputName === "avatarUrl" && setImageUrl(inputValue);
  }

  return (
    <Form
      title="Cambiar foto de perfil"
      buttonLabel={buttonLabel}
      onFormSubmit={handleFormSubmit}
    >
      <InputSet
        type="url"
        value={imageUrl}
        name="avatarUrl"
        placeholder="Enlace a la imagen"
        required="true"
        maxlength="500"
        onChange={handleChange}
      ></InputSet>
    </Form>
  );
}

export default EditAvatarForm;
