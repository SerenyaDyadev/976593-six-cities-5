import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {generateOffer} from "./mocks/offer";


const Settings = {
  OFFERS_COUNT: 4
};

const offers = new Array(Settings.OFFERS_COUNT).fill().map(generateOffer);

ReactDOM.render(
    <App
      offers={offers}
    />,
    document.querySelector(`#root`)
);
