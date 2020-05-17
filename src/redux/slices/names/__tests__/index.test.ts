import createStore from "../../../createStore";
import { addName, removeName, selectNames } from "../index";

describe("names slice", () => {
  describe("when created", () => {
    it("should not contain any names", () => {
      const store = createStore();

      expect(selectNames(store.getState())).toEqual([]);
    });
  });
  describe("when add name actions are dispatched", () => {
    it("should add payload names to the state", () => {
      const store = createStore();

      store.dispatch(addName("Name1"));
      store.dispatch(addName("Name2"));
      store.dispatch(addName("Name3"));

      expect(selectNames(store.getState())).toEqual([
        "Name1",
        "Name2",
        "Name3",
      ]);
    });

    it("should not add duplicate payload names to the state", () => {
      const store = createStore();

      store.dispatch(addName("Name1"));
      store.dispatch(addName("Name1"));
      store.dispatch(addName("Name1"));

      expect(selectNames(store.getState())).toEqual(["Name1"]);
    });
  });

  describe("when remove name actions are dispatched", () => {
    it("should remove payload names from the state", () => {
      const store = createStore();

      store.dispatch(addName("Name1"));
      store.dispatch(addName("Name2"));
      store.dispatch(addName("Name3"));

      store.dispatch(removeName("Name2"));

      expect(selectNames(store.getState())).toEqual(["Name1", "Name3"]);
    });

    it("should not alter the state if payload name does not exist", () => {
      const store = createStore();

      store.dispatch(addName("Name1"));

      store.dispatch(removeName("Name2"));

      expect(selectNames(store.getState())).toEqual(["Name1"]);
    });
  });
});
