import Form from "../Form/Form";

function CardDeleteForm({ onSubmit, cardId }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(cardId);
  }

  return (
    <Form
      title="¿Estás seguro?"
      buttonLabel="Sí"
      onFormSubmit={handleSubmit}
    ></Form>
  );
}

export default CardDeleteForm;
