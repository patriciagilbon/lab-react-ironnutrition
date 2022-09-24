import React from 'react';
import PropTypes from 'prop-types';

function FoodCard(props) {
  return (
    <div>
      <p>
        {' '}
        {props.name}
      </p>
      <img src={props.image} alt="food" />
    </div>
  );
}

FoodCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};
FoodCard.defaultProps = {
  image: null,
};
export default FoodCard;
