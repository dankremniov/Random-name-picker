import React from "react";

type Props = {
  names: string[];
  onDelete: (n: string) => void;
};

const NameList = ({ names, onDelete }: Props) => {
  return (
    <>
      {names.map((n) => {
        return (
          <div data-testid="name" key={n}>
            <span>{n}</span>
            <button data-testid="delete-name" onClick={() => onDelete(n)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default NameList;
