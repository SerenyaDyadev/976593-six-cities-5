import React from "react";
import {ReviewPropTypes} from "../../utils/property-types";
import {dateFormat} from "../../utils/utils";
import {TO_PERCENT} from "../../utils/const";

const Review = ({review}) => {

  const ratingUserPercent = Math.round(review.rating) * TO_PERCENT;

  return (
    <li className = "reviews__item" >
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.picture} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingUserPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.review}
        </p>
        <time
          className="reviews__time"
          dateTime={review.date}>
          {dateFormat(review.date)}
        </time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: ReviewPropTypes
};

export default Review;
