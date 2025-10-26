export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  textarea = false,
  placeholder,
}) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label fw-semibold">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="form-control"
          id={name}
          name={name}
          rows="4"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          rows="4"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}
