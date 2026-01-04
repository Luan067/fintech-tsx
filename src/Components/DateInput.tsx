import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-1 .75rem)",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap-2)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-1)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div className="box">
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input style={inputStyle} type="date" id={label} name={label} {...props} />
    </div>
  );
};

export default DateInput;
