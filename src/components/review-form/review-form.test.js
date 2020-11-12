import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";

const noop = () => { };

describe(`ReviewForm render`, () => {
  it(`ReviewForm with fill fields`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            rating={`4`}
            review={`She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white`}
            onReviewSubmit={noop}
            onTextFieldChange={noop}
            onRatingChange={noop}
            offerId={`1`}
            resetState={noop}
            isErrorToSubmit={false}
            updateErrorStatusAction={noop}
          />
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm without rating field`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            rating={``}
            review={`She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white`}
            onReviewSubmit={noop}
            onTextFieldChange={noop}
            onRatingChange={noop}
            offerId={`1`}
            resetState={noop}
            isErrorToSubmit={false}
            updateErrorStatusAction={noop}
          />

      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm without review field`, () => {
    const tree = renderer
        .create(
            <ReviewForm
              rating={`3`}
              review={``}
              onReviewSubmit={noop}
              onTextFieldChange={noop}
              onRatingChange={noop}
              offerId={`1`}
              resetState={noop}
              isErrorToSubmit={false}
              updateErrorStatusAction={noop}
            />
        )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm review field is short`, () => {
    const tree = renderer
        .create(
            <ReviewForm
              rating={`3`}
              review={`She carefully took a crumpled`}
              onReviewSubmit={noop}
              onTextFieldChange={noop}
              onRatingChange={noop}
              offerId={`1`}
              resetState={noop}
              isErrorToSubmit={false}
              updateErrorStatusAction={noop}
            />
        )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm review field is long`, () => {
    const tree = renderer
        .create(
            <ReviewForm
              rating={`3`}
              review={`She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white. She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white. She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white`}
              onReviewSubmit={noop}
              onTextFieldChange={noop}
              onRatingChange={noop}
              offerId={`1`}
              resetState={noop}
              isErrorToSubmit={false}
              updateErrorStatusAction={noop}
            />
        )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
