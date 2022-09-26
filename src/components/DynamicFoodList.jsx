import React, { Component } from 'react';
import { Row, Col } from 'antd';
import foods from '../foods.json';
import FoodBoxs from './FoodBox';
import AddFoodItem from './AddFoodForm';
import SearchForm from './SearchForm';

class DynamicFoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods,
      queryText: '',
    };
  }

  addFoodHandler = (foodItem) => {
    this.setState((prevState) => {
      const FoodCopy = [...prevState.foods]; // copy!
      FoodCopy.push({
        name: foodItem.name,
        calories: foodItem.calories,
        image: foodItem.image,
        servings: foodItem.servings,
      });
      return { foods: FoodCopy };
    });
  };

  deleteItem = (foodItem) => {
    this.setState((prevState) => {
      const FoodCopy = [...prevState.foods]; // copy!
      const index = FoodCopy.findIndex((item) => item.name === foodItem);
      if (index > -1) { // only splice array when item is found
        FoodCopy.splice(index, 1); // 2nd parameter means remove one item only
      }
      return { foods: FoodCopy };
    });
  };

  addSearch = (queryText) => {
    this.setState({
      queryText,
    });
  };

  render() {
    return (
      <div>
        <Row
          justify="space-between"
          gutter={[{
            xs: 8, sm: 16, md: 24, lg: 32,
          }, {
            xs: 8, sm: 16, md: 24, lg: 32,
          }]}
        >
          <Col
            xs={24}
            sm={16}
          >
            <AddFoodItem addTheFood={this.addFoodHandler} />
          </Col>
          <Col
            xs={24}
            sm={8}
          >
            <SearchForm searchFood={this.addSearch} />
          </Col>
        </Row>
        <Row
          gutter={[{
            xs: 8, sm: 16, md: 24, lg: 32,
          }, {
            xs: 8, sm: 16, md: 24, lg: 32,
          }]}
          style={{ marginTop: '10px' }}
        >
          {
            this.state.foods.filter(
              (obj) => obj.name.toLowerCase().includes(this.state.queryText.toLowerCase()),
            ).map((item) => (
              <FoodBoxs
                key={item.name}
                name={item.name}
                calories={item.calories}
                image={item.image}
                servings={item.servings}
                clickToDelete={() => this.deleteItem(item.name)}
              />
            ))
          }
        </Row>
      </div>
    );
  }
}
export default DynamicFoodList;
