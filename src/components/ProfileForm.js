import { useContext, useEffect, useState } from "react";
import InputSet from "./InputSet";
import Form from "./Form";
import { api } from "../utils/api";
import { PopupWithFormContext } from "./PopupWithFormContext";

function ProfileForm({ currentUser }) {
  const [userName, setUserName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Guardar");

  const handleFormSubmit = useContext(PopupWithFormContext);

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name);
      setAboutMe(currentUser.about);
    }
  }, []);

  function handleSubmit(evt) {
    setButtonLabel("Guardando...");
    api
      .setUserInfo(userName, aboutMe)
      .then((res) => {
        handleFormSubmit(res);
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
        value={userName}
      ></InputSet>
      <InputSet
        type="text"
        name="aboutMe"
        placeholder="Acerca de mí"
        maxLength="200"
        minLength="2"
        required={true}
        onChange={handleChange}
        value={aboutMe}
      ></InputSet>
    </Form>
  );
}

export default ProfileForm;
