import React from "react";
import { render } from "@testing-library/react";
import NamePicker from "../index";

describe("NamePicker", () => {
  it("should display random name element", () => {
    const { getByTestId } = render(
      <NamePicker
        name="Name1"
        disabled
        onClick={() => {
          return;
        }}
      />
    );

    expect(getByTestId("random-name")).toHaveTextContent("Name1");
  });

  describe("when disabled props is true", () => {
    it("should display a disable button and an error message", () => {
      const { getByText } = render(
        <NamePicker
          name=""
          disabled
          onClick={() => {
            return;
          }}
        />
      );

      expect(getByText("Pick random")).toBeDisabled();
      expect(
        getByText(/At least two names have to be added/)
      ).toBeInTheDocument();
    });
  });

  describe("when disabled props is false", () => {
    it("should display an enable button and no error message", () => {
      const { getByText, queryByText } = render(
        <NamePicker
          name=""
          disabled={false}
          onClick={() => {
            return;
          }}
        />
      );

      expect(getByText("Pick random")).toBeEnabled();
      expect(
        queryByText(/At least two names have to be added/)
      ).not.toBeInTheDocument();
    });
  });
});
