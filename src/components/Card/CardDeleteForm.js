import Form from "../Form/Form";
import { PopupWithFormContext } from "../Context/PopupWithFormContext";
import { useContext, useState } from "react";
import { api } from "../../utils/api";

function CardDeleteForm({ cardId }) {
  const [buttonLabel, setButtonLabel] = useState("Sí");

  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit() {
    setButtonLabel("Eliminando...");
    api.configRequest({
      resource: `/cards/${cardId}`,
    });
    api
      .delete()
      .then((res) => {
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
