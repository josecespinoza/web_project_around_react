import { useEffect, useRef } from "react";
import FormValidator from "../../helpers/FormValidator.js";

function Form({ children, title, buttonLabel, onFormSubmit }) {
  const formRef = useRef();

  useEffect(() => {
    const formValidator = new FormValidator(formRef.current);
    formValidator.enableValidation();
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    onFormSubmit(evt);
  }

  return (
    <form
      ref={formRef}
      className="form form_theme_dark"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className="form__title">{title}</h2>
      <div className="form__inputs">{children}</div>
      <button className="button button_theme_light button_action_save button_location_form">
        {buttonLabel}
      </button>
    </form>
  );
}

export default Form;
