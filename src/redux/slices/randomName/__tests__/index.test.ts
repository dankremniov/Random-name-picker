import createStore from "../../../createStore";
import { setName, selectName, pickRandomName } from "../index";
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

  describe("given names slice with length less than two", () => {
    const store = createStore({ generateUniqueRandom: () => 1 });
    const initialState = selectName(store.getState());

    store.dispatch(addName("Name1"));

    describe("when pick random name action is dispatched", () => {
      store.dispatch(pickRandomName());

      it("should not change the state", () => {
        expect(selectName(store.getState())).toBe(initialState);
      });
    });
  });

  describe("given names slice with valid length and a random number", () => {
    const store = createStore({ generateUniqueRandom: () => 1 });

    store.dispatch(addName("Name1"));
    store.dispatch(addName("Name2"));

    describe("when pick random name action is dispatched", () => {
      store.dispatch(pickRandomName());

      it("should replace state with a random name", () => {
        expect(selectName(store.getState())).toEqual("Name2");
      });
    });
  });

  describe("given randomName slice equal to a name which exists in names slice", () => {
    const generateUniqueRandomSpy = jest.fn();

    const store = createStore({
      generateUniqueRandom: (max: number, previous: number) => {
        generateUniqueRandomSpy(max, previous);
        return 0;
      },
    });

    store.dispatch(setName("Name1"));

    store.dispatch(addName("Name1"));
    store.dispatch(addName("Name2"));

    describe("when pick random name action is dispatched", () => {
      store.dispatch(pickRandomName());

      it("should call generateUniqueRandom api with the index of the name as previous index", () => {
        expect(generateUniqueRandomSpy).toBeCalledWith(1, 0);
      });
    });
  });

  describe("given randomName slice equal to a name which does exist in names slice", () => {
    const generateUniqueRandomSpy = jest.fn();

    const store = createStore({
      generateUniqueRandom: (max: number, previous: number) => {
        generateUniqueRandomSpy(max, previous);
        return 0;
      },
    });

    store.dispatch(setName("Name3"));

    store.dispatch(addName("Name1"));
    store.dispatch(addName("Name2"));

    describe("when pick random name action is dispatched", () => {
      store.dispatch(pickRandomName());

      it("should call generateUniqueRandom api with -1 as previous index", () => {
        expect(generateUniqueRandomSpy).toBeCalledWith(1, -1);
      });
    });
  });
});
