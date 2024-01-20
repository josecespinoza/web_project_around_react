import React from "react";
import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";
import { api } from "../../utils/api";

function ProfileForm({ onSubmit }) {
  const [userName, setUserName] = React.useState("");
  const [aboutMe, setAboutMe] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    api.configRequest({
      resource: "users/me",
      body: { name: userName, about: aboutMe },
    });
    api.patch().then((res) => {
      onSubmit(res);
    });
  }

  function handleChange(inputName, inputValue) {
    inputName === "name" && setUserName(inputValue);
    inputName === "aboutMe" && setAboutMe(inputValue);
  }
  return (
    <Form
      title="Editar Perfil"
      buttonLabel="Guardar"
      onFormSubmit={handleSubmit}
    >
      <InputSet
        type="text"
        name="name"
        placeholder="Nombre"
        maxLength="40"
        minLength="2"
        required={true}
        onChange={handleChange}
      ></InputSet>
      <InputSet
        type="text"
        name="aboutMe"
        placeholder="Acerca de mí"
        maxLength="200"
        minLength="2"
        required={true}
        onChange={handleChange}
      ></InputSet>
    </Form>
  );
}

export default ProfileForm;
