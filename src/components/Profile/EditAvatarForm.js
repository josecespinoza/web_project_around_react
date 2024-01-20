import React from "react";
import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";
import { api } from "../../utils/api";

function EditAvatarForm({ onSubmit }) {
  const [imageUrl, setImageUrl] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    api.configRequest({
      resource: "/users/me/avatar",
      body: { avatar: imageUrl },
    });
    api.patch().then((res) => {
      onSubmit(res);
    });
  }

  function handleChange(inputName, inputValue) {
    inputName === "avatarUrl" && setImageUrl(inputValue);
  }

  return (
    <Form
      title="Cambiar foto de perfil"
      buttonLabel="Guardar"
      onFormSubmit={handleSubmit}
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
