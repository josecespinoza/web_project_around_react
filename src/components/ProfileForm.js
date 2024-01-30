import { useContext, useState } from "react";
import InputSet from "./InputSet";
import Form from "./Form";
import { api } from "../utils/api";
import { PopupWithFormContext } from "./PopupWithFormContext";

function ProfileForm() {
  const [userName, setUserName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Guardar");

  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit(evt) {
    setButtonLabel("Guardando...");
    api.configRequest({
      resource: "users/me",
      body: { name: userName, about: aboutMe },
    });
    api
      .patch()
      .then((res) => {
        handleSubmit(res);
      })
      .catch(console.error("There was an error"));
  }

  function handleChange(inputName, inputValue) {
    inputName === "name" && setUserName(inputValue);
    inputName === "aboutMe" && setAboutMe(inputValue);
  }
  return (
    <Form
      title="Editar Perfil"
      buttonLabel={buttonLabel}
      onFormSubmit={handleFormSubmit}
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
