import React from "react";
import { render } from "@testing-library/react";
import Layout from "../index";

describe("Layout", () => {
  it("should display application title and passed children", () => {
    const { getByText } = render(
      <Layout>
        <div>some children</div>
      </Layout>
    );

    expect(getByText("Random name picker")).toBeInTheDocument();
    expect(getByText("some children")).toBeInTheDocument();
  });
});
