import InputSet from "./InputSet";
import Form from "./Form";
import { useState, useContext } from "react";
import api from "../utils/api";
import { PopupWithFormContext } from "./PopupWithFormContext";

function AddCardForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Guardar");

  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit(evt) {
    setButtonLabel("Guardando...");
    api
      .addCard(title, imageUrl)
      .then((res) => {
        handleSubmit(res);
      })
      .catch(console.error("Couldn't add new card"));
  }

  function handleChange(inputName, inputValue) {
    inputName === "title" && setTitle(inputValue);
    inputName === "imageUrl" && setImageUrl(inputValue);
  }

  return (
    <Form
      title="Nuevo Lugar"
      buttonLabel={buttonLabel}
      onFormSubmit={handleFormSubmit}
    >
      <InputSet
        type="text"
        name="title"
        placeholder="Título"
        maxlength="30"
        minlength="2"
        required={true}
        onChange={handleChange}
      ></InputSet>
      <InputSet
        type="url"
        name="imageUrl"
        placeholder="Enlace a la imagen"
        maxlength="500"
        required={true}
        onChange={handleChange}
      ></InputSet>
    </Form>
  );
}

export default AddCardForm;
