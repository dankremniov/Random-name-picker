import React from "react";

type Props = {
  name: string | null;
  disabled: boolean;
  onClick: () => void;
};

const NamePicker = ({ name, disabled, onClick }: Props) => {
  return (
    <>
      <span data-testid="random-name">{name}</span>
      <button onClick={onClick} disabled={disabled}>
        Pick random
      </button>
      {disabled ? <p>At least two names have to be added.</p> : null}
    </>
  );
};

export default NamePicker;
