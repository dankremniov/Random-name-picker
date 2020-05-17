import randomInt from "random-int";

const generateRandomNum = (max: number, previous: number | null): number => {
  if (max <= 0) {
    return 0;
  }

  const random = randomInt(max);
  return random === previous ? generateRandomNum(max, previous) : random;
};

export default generateRandomNum;
