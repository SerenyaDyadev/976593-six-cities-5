import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';

const mockEvent = {
  preventDefault() { }
};

const noop = () => { };

configure({adapter: new Adapter()});

it(`ReviewForm testing`, () => {
  const onReviewSubmit = jest.fn();
  const wrapper = shallow(
      <ReviewForm
        rating={`3`}
        review={`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`}
        onReviewSubmit={onReviewSubmit}
        offerId={`1`}
        resetState={noop}
        onTextFieldChange={noop}
        onRatingChange={noop}
        isErrorToSubmit={false}
        updateErrorStatusAction={noop}
      />
  );

  wrapper.find(`.form`).simulate(`submit`, mockEvent);

  expect(onReviewSubmit).toHaveBeenCalledTimes(1);
  expect(wrapper.find(`.reviews__textarea`).props().value).toEqual(`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`);
  expect(wrapper.find(`.form__rating-input`).at(2).props().value).toEqual(`3`);
  expect(wrapper.find(`.reviews__submit`).props().disabled).toEqual(false);
});
