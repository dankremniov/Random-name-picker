import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const NameFormContent = ({ value, onChange, onSubmit }: Props) => {
  return (
    <>
      <input
        placeholder="Please specify name"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSubmit}>Add</button>
    </>
  );
};

export default NameFormContent;
