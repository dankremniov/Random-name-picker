import React from "react";
import { render, within } from "@testing-library/react";
import NameList from "../index";

describe("NameList", () => {
  it("should display list of names with delete buttons", () => {
    const names = ["Name1", "Name2", "Name3"];
    const { getAllByTestId } = render(
      <NameList
        names={["Name1", "Name2", "Name3"]}
        onDelete={() => {
          return;
        }}
      />
    );

    const nameElements = getAllByTestId("name");

    expect(nameElements.length).toBe(3);

    names.forEach((n, i) => {
      expect(nameElements[i]).toHaveTextContent(n);
      expect(
        within(nameElements[i]).getByTestId("delete-name")
      ).toBeInTheDocument();
    });
  });
});
