import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";

function AddCardForm() {
  return (
    <Form title="Nuevo Lugar" buttonLabel="Guardar">
      <InputSet
        type="text"
        name="title"
        placeholder="Título"
        maxlength="30"
        minlength="2"
        required={true}
      ></InputSet>
      <InputSet
        type="url"
        name="imageUrl"
        placeholder="Enlace a la imagen"
        maxlength="500"
        required={true}
      ></InputSet>
    </Form>
  );
}

export default AddCardForm;
