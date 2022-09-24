import React from 'react';
import { Card, Col, Button } from 'antd';
import PropTypes from 'prop-types';

function FoodBoxs(props) {
  return (
    <Col>
      <Card
        hoverable
        title={props.name}
        style={{ width: 230, height: 550, margin: 10 }}
        cover={<img alt="food" src={props.image} />}
      >
        <p>
          Calories:
          {props.calories}
        </p>
        <p>
          Servings:
          {props.servings}
        </p>
        <Button type="primary" id="deleteButton" name="deleteButton" onClick={props.clickToDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

FoodBoxs.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  calories: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  clickToDelete: PropTypes.func.isRequired,
};

FoodBoxs.defaultProps = {
  image: null,
};
export default FoodBoxs;
