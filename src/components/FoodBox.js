import React from 'react';
import { Card, Col, Button } from 'antd';

const FoodBoxs = (props) => (
<Col>
  <Card
    hoverable
    title={props.name}
    style={{ width: 230, height: 550, margin: 10 }}
    cover={<img alt="food" src={props.image} />}
  >
    <p>Calories: {props.calories}</p>
    <p>Servings: {props.servings}</p>
    <Button type="primary" id="deleteButton" name="deleteButton"  onClick={props.clickToDelete}> Delete </Button>
  </Card>
</Col>
);

export default FoodBoxs;