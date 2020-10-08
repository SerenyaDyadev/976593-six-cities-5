import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {generateOffer} from "./mocks/offer";
import {generateReview} from "./mocks/review";

const Settings = {
  OFFERS_COUNT: 4
};

const offers = new Array(Settings.OFFERS_COUNT).fill().map(generateOffer);
console.log(offers);

const reviews = new Array(Settings.OFFERS_COUNT).fill().map(generateReview);
console.log(reviews);


ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
