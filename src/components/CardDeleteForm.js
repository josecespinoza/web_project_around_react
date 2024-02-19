import Form from "./Form";
import { PopupWithFormContext } from "./PopupWithFormContext";
import { useContext, useState } from "react";
import { api } from "../utils/api";

function CardDeleteForm({ cardId }) {
  const [buttonLabel, setButtonLabel] = useState("Sí");

  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit() {
    setButtonLabel("Eliminando...");
    api
      .deleteCard(cardId)
      .then(() => {
        handleSubmit(cardId);
      })
      .catch(console.error("There was an error"));
  }

  return (
    <Form
      title="¿Estás seguro?"
      buttonLabel={buttonLabel}
      onFormSubmit={handleFormSubmit}
    ></Form>
  );
}

export default CardDeleteForm;
