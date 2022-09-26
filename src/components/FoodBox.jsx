import React from 'react';
import {
  Card, Col, Button, Popconfirm,
} from 'antd';
import PropTypes from 'prop-types';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  Link,
} from 'react-router-dom';

function FoodBoxs(props) {
  return (
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={4}

    >
      <Card
        hoverable
        title={(
          <Link to={`food/${props.name}`}>
            {props.name}
          </Link>
)}
        style={{ color: 'black' }}
        cover={<img alt="food" src={props.image} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />}
      >
        <p>
          Calories:
          {props.calories}
        </p>
        <p>
          Servings:
          {props.servings}
        </p>

        <Popconfirm title="Are you sure?" onConfirm={props.clickToDelete} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
          <Button type="primary" id="deleteButton" name="deleteButton"> Delete </Button>
        </Popconfirm>
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
