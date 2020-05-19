import generateRandom from "../generateRandom";

const generateUniqueRandom = (max: number, previous: number): number => {
  if (max <= 0) {
    return 0;
  }

  const random = generateRandom(max);
  return random === previous ? generateUniqueRandom(max, previous) : random;
};

export default generateUniqueRandom;
