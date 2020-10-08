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
    name: getElementArray(NAMES),
    picture: `${AVATAR_URL}/${Math.random()}`,
    rating: getRandomInteger(0, 5),
    date: `${getElementArray(MONTHS)} ${getRandomInteger(1, 31)}`,
    review: getElementArray(DESCRIPTION)
  };
};
