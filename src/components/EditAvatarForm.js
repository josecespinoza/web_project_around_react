import InputSet from "./InputSet/InputSet";
import Form from "./Form/Form";

function EditAvatarForm() {
  return (
    <Form title="Cambiar foto de perfil" buttonLabel="Guardar">
      <InputSet
        type="url"
        name="avatarUrl"
        placeholder="Enlace a la imagen"
        required="true"
        maxlength="500"
      ></InputSet>
    </Form>
  );
}

export default EditAvatarForm;
