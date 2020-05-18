import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import createStore from "../redux/createStore";

const setup = () => {
  const store = createStore();

  const result = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const getRandomNameButton = () => {
    return result.getByText("Pick random");
  };

  const getRandomName = () => {
    return result.getByTestId("random-name");
  };

  const addName = (n: string) => {
    fireEvent.change(result.getByPlaceholderText("Please specify name"), {
      target: { value: n },
    });
    fireEvent.click(result.getByText("Add"));
  };

  return {
    ...result,
    getRandomNameButton,
    getRandomName,
    addName,
  };
};

describe("App integration", () => {
  describe("when there are less than two names", () => {
    it("should display a disabled button, error message and no names in the names list", () => {
      const { queryAllByTestId, getRandomNameButton, queryByText } = setup();

      expect(getRandomNameButton()).toBeDisabled();
      expect(
        queryByText(/At least two names have to be added/)
      ).toBeInTheDocument();
      expect(queryAllByTestId("name").length).toBe(0);
    });
  });

  describe("when a name is added and it is unique", () => {
    it("should display the name in the names list", () => {
      const { getByPlaceholderText, getByText, getByTestId } = setup();

      fireEvent.change(getByPlaceholderText("Please specify name"), {
        target: { value: "Name1" },
      });
      fireEvent.click(getByText("Add"));

      expect(getByTestId("name")).toHaveTextContent("Name1");
    });
  });

  // validation test case

  // deletion test case

  describe("when there are more than one name and user interacts with pick random name button", () => {
    it("should display random name without repeating it twice in a row", () => {
      const { getRandomNameButton, getRandomName, addName } = setup();

      addName("Name1");
      addName("Name2");

      fireEvent.click(getRandomNameButton());

      const first = getRandomName().innerHTML;

      fireEvent.click(getRandomNameButton());

      const second = getRandomName().innerHTML;

      expect(getRandomName()).not.toHaveTextContent(first);

      fireEvent.click(getRandomNameButton());

      expect(getRandomName()).not.toHaveTextContent(second);
      expect(getRandomName()).toHaveTextContent(first);
    });
  });
});
