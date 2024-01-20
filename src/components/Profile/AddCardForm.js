import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";
import React from "react";
import { api } from "../../utils/api";

function AddCardForm({ onSubmit }) {
  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    api.configRequest({
      resource: "/cards",
      body: { name: title, link: imageUrl },
    });
    api.post().then((res) => {
      onSubmit(res);
    });
  }

  function handleChange(inputName, inputValue) {
    inputName === "title" && setTitle(inputValue);
    inputName === "imageUrl" && setImageUrl(inputValue);
  }

  return (
    <Form title="Nuevo Lugar" buttonLabel="Guardar" onFormSubmit={handleSubmit}>
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
