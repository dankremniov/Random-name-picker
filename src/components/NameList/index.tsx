import React from "react";

type Props = {
  names: string[];
};

const NameList = ({ names }: Props) => {
  return (
    <>
      {names.map((n) => {
        return (
          <div data-testid="name" key={n}>
            {n}
          </div>
        );
      })}
    </>
  );
};

export default NameList;
