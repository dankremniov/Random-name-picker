import randomInt from "random-int";
import generateRandomNum from "../index";

jest.mock("random-int");

const mockedRandomInt = randomInt as jest.Mock<number>;

describe("generateRandomNum", () => {
  describe("when random number is not equal to previous random number", () => {
    it("should return the random number", () => {
      mockedRandomInt.mockImplementationOnce(() => 2);

      expect(generateRandomNum(5, 1)).toBe(2);
    });
  });

  describe("when random number is equal to previous random number", () => {
    it("should return a different random number", () => {
      mockedRandomInt
        .mockImplementationOnce(() => 2)
        .mockImplementationOnce(() => 3);

      expect(generateRandomNum(5, 2)).toBe(3);
    });
  });

  describe("when given maximum value is less than zero", () => {
    it("should return zero", () => {
      expect(generateRandomNum(-1, 2)).toBe(0);
    });
  });

  describe("when given maximum is zero or less and random number is zero", () => {
    it("should return zero", () => {
      expect(generateRandomNum(0, 0)).toBe(0);
    });
  });
});
