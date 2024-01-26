import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";
import { useState, useContext } from "react";
import { api } from "../../utils/api";
import { PopupWithFormContext } from "../Context/PopupWithFormContext";

function AddCardForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    api.configRequest({
      resource: "/cards",
      body: { name: title, link: imageUrl },
    });
    api.post().then((res) => {
      handleSubmit(res);
    });
  }

  function handleChange(inputName, inputValue) {
    inputName === "title" && setTitle(inputValue);
    inputName === "imageUrl" && setImageUrl(inputValue);
  }

  return (
    <Form
      title="Nuevo Lugar"
      buttonLabel="Guardar"
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
