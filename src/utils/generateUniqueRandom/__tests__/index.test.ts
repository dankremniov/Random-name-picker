import generateRandom from "../../generateRandom";
import generateUniqueRandom from "../index";

jest.mock("../../generateRandom");

const mockedGenerateRandom = generateRandom as jest.Mock<number>;

describe("generateUniqueRandom", () => {
  describe("when random number is not equal to previous random number", () => {
    it("should return the random number", () => {
      mockedGenerateRandom.mockImplementationOnce(() => 2);

      expect(generateUniqueRandom(5, 1)).toBe(2);
    });
  });

  describe("when random number is equal to previous random number", () => {
    it("should return a different random number", () => {
      mockedGenerateRandom
        .mockImplementationOnce(() => 2)
        .mockImplementationOnce(() => 3);

      expect(generateUniqueRandom(5, 2)).toBe(3);
    });
  });

  describe("when given maximum value is less than zero", () => {
    it("should return zero", () => {
      expect(generateUniqueRandom(-1, 2)).toBe(0);
    });
  });

  describe("when given maximum is zero and random number is zero", () => {
    it("should return zero", () => {
      expect(generateUniqueRandom(0, 0)).toBe(0);
    });
  });
});
