import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Rating = ({ rating, text, color }) => {
  let fullStars = [],
    halfStars = [],
    emptyStars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    fullStars.push(
      <span style={{ color }} key={uuidv4()} className="fas fa-star"></span>
    );
  }
  if (rating % 1 >= 0.5) {
    halfStars.push(
      <span
        style={{ color }}
        key={uuidv4()}
        className="fas fa-star-half-alt"
      ></span>
    );
  }
  if (rating % 1 > 0 && rating % 1 < 0.5) {
    emptyStars.push(
      <span style={{ color }} key={uuidv4()} className="far fa-star"></span>
    );
  }
  for (let i = 0; i < Math.floor(5 - rating); i++) {
    emptyStars.push(
      <span style={{ color }} key={uuidv4()} className="far fa-star"></span>
    );
  }
  return (
    <div className="rating">
      <div className="stars">
        {fullStars}
        {halfStars}
        {emptyStars}
      </div>
      {text}
    </div>
  );
};

Rating.defaultProps = {
  color: 'gold',
};
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
