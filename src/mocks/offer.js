import {CITYES, PLACES, TITLES, THINGS, NAMES, DESCRIPTION, AVATAR_URL, COORDINATES} from "./const.js";
import {getRandomInteger, getElementArray} from "./utils.js";
import {generateReview} from "./review";

const photoArrayLength = 6;

const getElenetsFromArray = (arr, begin = 0) => {

  return new Array(getRandomInteger(begin, arr.length - 1)).fill().map(() => getElementArray(arr));
};

const getPicturesArr = () => {

  return new Array(photoArrayLength).fill().map(() => {
    return {
      src: `http://picsum.photos/248/152?r=${Math.random()}`,
      description: `place description`,
    };
  });
};

export const generateOffer = () => {

  return {
    id: getRandomInteger(0, 30),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    features: {
      type: getElementArray(PLACES),
      badrooms: getRandomInteger(1, 6),
      adults: getRandomInteger(1, 8),
    },
    isPremium: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(0, 200),
    title: getElementArray(TITLES),
    rating: Number(`${getRandomInteger(0, 4)}.${getRandomInteger(0, 9)}`),
    things: getElenetsFromArray(THINGS, 3),
    pictures: getPicturesArr(),
    description: getElementArray(DESCRIPTION),
    owner: {
      name: getElementArray(NAMES),
      super: Boolean(getRandomInteger(0, 1)),
      picture: `${AVATAR_URL}/${Math.random()}`,
    },
    reviews: new Array(getRandomInteger(1, 6)).fill().map(generateReview),
    coordinates: getElementArray(COORDINATES),
    city: CITYES.AMSTERDAM
  };
};
