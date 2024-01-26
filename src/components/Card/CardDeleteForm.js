import Form from "../Form/Form";
import { PopupWithFormContext } from "../Context/PopupWithFormContext";
import { useContext } from "react";
import { api } from "../../utils/api";

function CardDeleteForm({ cardId }) {
  const handleSubmit = useContext(PopupWithFormContext);

  function handleFormSubmit() {
    api.configRequest({
      resource: `/cards/${cardId}`,
    });
    api.delete().then((res) => {
      handleSubmit(cardId);
    });
  }

  return (
    <Form
      title="¿Estás seguro?"
      buttonLabel="Sí"
      onFormSubmit={handleFormSubmit}
    ></Form>
  );
}

export default CardDeleteForm;
