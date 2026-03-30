import React from "react";

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
}) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <select
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Choose {label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
