import createStore from "../../../createStore";
import { setName, selectName } from "../index";
import { addName } from "../../names/";

describe("randomName slice", () => {
  describe("when created", () => {
    it("should be equal to null", () => {
      const store = createStore();

      expect(selectName(store.getState())).toEqual(null);
    });
  });

  describe("when set name actions are dispatched", () => {
    it("should replace state with string from payload", () => {
      const store = createStore();

      store.dispatch(setName("Name1"));

      expect(selectName(store.getState())).toEqual("Name1");
    });

    it("should replace state with null from payload", () => {
      const store = createStore();

      store.dispatch(setName("Name1"));
      store.dispatch(setName(null));

      expect(selectName(store.getState())).toEqual(null);
    });
  });

  // describe("given non-empty array of names and random number", () => {
  //   const store = createStore({ generateRandomNum: () => 1 });
  //
  //   store.dispatch(addName("Name1"));
  //   store.dispatch(addName("Name2"));
  //
  //   describe("when pick random name action is dispatched", () => {
  //     it("should replace state with a random name", () => {
  //       expect(selectName(store.getState())).toEqual("Name2");
  //     });
  //   });
  // });
});
