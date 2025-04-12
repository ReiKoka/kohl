import { handleChange } from "./formMethods";

function FormInput({
  value,
  error,
  setFormData,
  setErrors,
  name,
  labelText,
  icon: Icon,
  type = "text",
}) {
  return (
    <div className="font-primary flex w-full flex-col gap-1">
      <label htmlFor={name} className="text-base font-medium capitalize">
        {labelText}
      </label>
      <div className="group relative">
        <input
          className={`peer focus:border-error focus:ring-error w-full rounded-lg border py-2 pr-2.5 pl-12 ring-offset-2 focus:ring-2 focus:outline-0 ${
            error
              ? "focus:border-error focus:ring-error border-error"
              : "border-secondary focus:border-secondary focus:ring-secondary"
          } ring-offset-base-200`}
          placeholder={`Enter your ${labelText}`}
          type={type}
          name={name}
          value={value}
          onChange={(e) => handleChange(e, setFormData, setErrors)}
        />
        {Icon && (
          <Icon
            className={`absolute top-2.5 left-2.5 transition-colors duration-150 ${
              error ? "fill-error" : "peer-focus:fill-secondary fill-secondary"
            }`}
            size={24}
          />
        )}
      </div>
      {error && <p className="text-error pt-1 pl-1 text-sm">{error}</p>}
    </div>
  );
}

export default FormInput;
