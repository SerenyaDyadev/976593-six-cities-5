import {PLACES, TITLES, THINGS, NAMES, DESCRIPTION, AVATAR_URL} from "./const.js";
import {getRandomInteger, getElementArray} from "./utils.js";


const getElenetsFromArray = (arr) => {

  return new Array(getRandomInteger(0, arr.length - 1)).fill().map(() => getElementArray(arr));
};

const getPicturesArr = () => {

  return new Array(getRandomInteger(1, 8)).fill().map(() => {
    return {
      src: `http://picsum.photos/248/152?r=${Math.random()}`,
      description: `place description`,
    };
  });
};

export const generateOffer = () => {

  return (
    {
      id: getRandomInteger(0, 30),
      features: {
        type: getElementArray(PLACES),
        badrooms: getRandomInteger(0, 6),
        adults: getRandomInteger(0, 8),
      },
      premium: getRandomInteger(0, 1),
      price: getRandomInteger(0, 200),
      title: getElementArray(TITLES),
      rating: getRandomInteger(0, 5),
      things: getElenetsFromArray(THINGS),
      pictures: getPicturesArr(),
      description: getElementArray(DESCRIPTION),
      owner: {
        name: getElementArray(NAMES),
        super: getRandomInteger(0, 1),
        picture: `${AVATAR_URL}/${Math.random()}`,
      }
    }
  );
};
