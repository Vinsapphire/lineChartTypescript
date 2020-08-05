import React from "react";

interface inputProps {
  label: string;
  id: string;
  value: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput = (props: inputProps) => {
  const { label, value, onChange, id } = props;

  return (
    <label>
      {`${label}:`}
      <input type="number" name={id} value={value} onChange={onChange}></input>
    </label>
  );
};

export default FormInput;
