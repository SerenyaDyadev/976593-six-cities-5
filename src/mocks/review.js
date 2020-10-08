import {NAMES, DESCRIPTION, AVATAR_URL} from "./const.js";
import {getRandomInteger, getElementArray} from "./utils.js";

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

export const generateReview = () => {

  return {
    id: getRandomInteger(0, 30),
    name: getElementArray(NAMES),
    picture: `${AVATAR_URL}/${Math.random()}`,
    rating: Number(`${getRandomInteger(0, 4)}.${getRandomInteger(0, 9)}`),
    date: `${getElementArray(MONTHS)} ${getRandomInteger(1, 31)}`,
    comment: getElementArray(DESCRIPTION)
  };
};
