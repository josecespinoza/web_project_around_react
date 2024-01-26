import { useState, useContext } from "react";
import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";
import { api } from "../../utils/api";
import { PopupWithFormContext } from "../Context/PopupWithFormContext";

function EditAvatarForm() {
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    api.configRequest({
      resource: "/users/me/avatar",
      body: { avatar: imageUrl },
    });
    api.patch().then((res) => {
      handleSubmit(res);
    });
  }

  function handleChange(inputName, inputValue) {
    inputName === "avatarUrl" && setImageUrl(inputValue);
  }

  return (
    <Form
      title="Cambiar foto de perfil"
      buttonLabel="Guardar"
      onFormSubmit={handleFormSubmit}
    >
      <InputSet
        type="url"
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
