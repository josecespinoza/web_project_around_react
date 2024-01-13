function Form({ children, title, buttonLabel }) {
  return (
    <form className="form form_theme_dark" noValidate>
      <h2 className="form__title">{title}</h2>
      <div className="form__inputs">{children}</div>
      <button className="button button_theme_light button_action_save button_location_form">
        {buttonLabel}
      </button>
    </form>
  );
}

export default Form;
