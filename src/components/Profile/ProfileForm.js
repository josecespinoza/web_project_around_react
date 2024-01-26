import { useContext, useState } from "react";
import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";
import { api } from "../../utils/api";
import { PopupWithFormContext } from "../Context/PopupWithFormContext";

function ProfileForm() {
  const [userName, setUserName] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    api.configRequest({
      resource: "users/me",
      body: { name: userName, about: aboutMe },
    });
    api.patch().then((res) => {
      handleSubmit(res);
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
