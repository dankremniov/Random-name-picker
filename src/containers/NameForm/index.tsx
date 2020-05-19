import React, { useState } from "react";
import NameFormContent from "../../components/NameFormContent";

type Props = {
  onSubmit: (n: string) => void;
};

const NameForm = ({ onSubmit }: Props) => {
  const [value, setValue] = useState("");

  return (
    <NameFormContent
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onSubmit={() => {
        if (value !== "") {
          onSubmit(value);
          setValue("");
        }
      }}
    />
  );
};

export default NameForm;
