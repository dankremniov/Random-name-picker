import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
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
    fireEvent.change(result.getByPlaceholderText("Please specify a name"), {
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
  describe("when initialised", () => {
    it("should not have any names displayed", () => {
      const { queryAllByTestId } = setup();

      expect(queryAllByTestId("name").length).toBe(0);
    });
  });

  describe("when there are less than two names", () => {
    it("should not allow interaction with pick random name button", () => {
      const { getRandomNameButton, getRandomName } = setup();

      fireEvent.click(getRandomNameButton());
      expect(getRandomNameButton()).toBeDisabled();
      expect(getRandomName()).toHaveTextContent("");
    });
  });

  describe("when a name is added and it is unique", () => {
    it("should display the name in the names list", () => {
      const { getByTestId, addName } = setup();

      addName("Name1");

      expect(getByTestId("name")).toHaveTextContent("Name1");
    });
  });

  describe("when a name is added and it is a duplicate", () => {
    it("should not add the name to the names list", () => {
      const { queryAllByTestId, addName } = setup();

      addName("Name1");
      addName("Name1");

      expect(queryAllByTestId("name").length).toBe(1);
    });
  });

  describe("when delete button next to a name is clicked", () => {
    it("should remove the name from the names list", () => {
      const { getByText, queryByText, queryAllByTestId, addName } = setup();

      addName("Name1");
      addName("Name2");

      const parent = getByText("Name1").closest('[data-testid="name"]');
      if (parent) {
        fireEvent.click(
          within(parent as HTMLElement).getByTestId("delete-name")
        );
      }

      expect(queryAllByTestId("name").length).toBe(1);
      expect(queryByText("Name1")).not.toBeInTheDocument();
      expect(getByText("Name2")).toBeInTheDocument();
    });
  });

  describe("when there are more than one name and pick random name button is clicked multiple times", () => {
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
