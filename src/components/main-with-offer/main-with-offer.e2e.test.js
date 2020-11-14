import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MainWithOffer} from "./main-with-offer";
import {offers} from "../../mocks/data";

configure({adapter: new Adapter()});

const noop = () => { };

const mockEvent = {
  preventDefault() { }
};

it(`Click by sorting element in MainWithOffer`, () => {
  const openSortListAction = jest.fn();

  const wrapper = shallow(
      <MainWithOffer
        city={`Amsterdam`}
        offers={offers}
        currentSort={`Popular`}
        updateActiveOfferIdAction={noop}
        openSort={false}
        openSortListAction={openSortListAction}
      />
  );

  wrapper.find(`span.places__sorting-type`).simulate(`click`, mockEvent);
  expect(openSortListAction).toHaveBeenCalledTimes(1);
});

