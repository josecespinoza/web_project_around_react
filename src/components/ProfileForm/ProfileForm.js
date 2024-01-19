import InputSet from "../InputSet/InputSet";
import Form from "../Form/Form";

function ProfileForm() {
  return (
    <Form title="Editar Perfil" buttonLabel="Guardar">
      <InputSet
        type="text"
        name="name"
        placeholder="Nombre"
        maxLength="40"
        minLength="2"
        required={true}
      ></InputSet>
      <InputSet
        type="text"
        name="aboutMe"
        placeholder="Acerca de mí"
        maxLength="200"
        minLength="2"
        required={true}
      ></InputSet>
    </Form>
  );
}

export default ProfileForm;
