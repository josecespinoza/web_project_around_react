function InputSet({
  type,
  name,
  placeholder,
  maxLength,
  minLength,
  required = false,
}) {
  return (
    <fieldset className="form__input-set">
      <input
        className="form__input"
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
      />
      <span className="form__input-error"></span>
    </fieldset>
  );
}

export default InputSet;
