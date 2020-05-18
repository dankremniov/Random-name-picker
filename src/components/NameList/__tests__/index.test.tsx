import React from "react";
import { render } from "@testing-library/react";
import NameList from "../index";

describe("NameList", () => {
  it("should display list of names", () => {
    const { getAllByTestId } = render(
      <NameList names={["Name1", "Name2", "Name3"]} />
    );

    const names = getAllByTestId("name");

    expect(names.length).toBe(3);
    expect(names[0]).toHaveTextContent("Name1");
    expect(names[1]).toHaveTextContent("Name2");
    expect(names[2]).toHaveTextContent("Name3");
  });
});
