function InputSet({
  type,
  name,
  placeholder,
  maxLength,
  minLength,
  required = false,
  onChange,
  value,
}) {
  function handleChange(evt) {
    onChange(evt.target.name, evt.target.value);
  }

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
        onChange={handleChange}
        value={value}
      />
      <span className="form__input-error"></span>
    </fieldset>
  );
}

export default InputSet;
