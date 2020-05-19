import React from "react";
import Section from "../index";
import { render } from "@testing-library/react";

describe("Section", () => {
  it("should display passed title and children", () => {
    const { getByText } = render(
      <Section title="Section title">
        <div>some children</div>
      </Section>
    );

    expect(getByText("Section title")).toBeInTheDocument();
    expect(getByText("some children")).toBeInTheDocument();
  });
});
