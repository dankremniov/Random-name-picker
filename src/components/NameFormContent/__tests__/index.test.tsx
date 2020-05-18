import React from "react";
import { render } from "@testing-library/react";
import NameFormContent from "../index";

describe("NameFormContent", () => {
  it("should display an input with value and a button", () => {
    const { getByPlaceholderText, getByText } = render(
      <NameFormContent
        value="Name1"
        onChange={() => {
          return;
        }}
        onSubmit={() => {
          return;
        }}
      />
    );

    expect(getByPlaceholderText("Please specify name")).toHaveValue("Name1");
    expect(getByText("Add")).toBeInTheDocument();
  });
});
