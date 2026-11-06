import "@styles/Input.scss";

const Input = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  maxLength,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {error && <p className="mensaje-error">{error}</p>}
    </>
  );
};

export default Input;
