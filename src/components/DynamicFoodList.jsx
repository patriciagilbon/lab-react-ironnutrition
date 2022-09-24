import React, { Component } from 'react';
import { Button } from 'antd';
import foods from '../foods.json';
import FoodBoxs from './FoodBox';
import './DynamicFoodList.css';
import AddFoodItem from './AddFoodForm';
import SearchForm from './SearchForm';

class DynamicFoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods,
      queryText: '',
      addFormVisibility: true,
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

  addSearch = (queryText) => {
    this.setState({
      queryText,
    });
  };

  toggle = () => {
    this.setState((prevState) => ({ addFormVisibility: !prevState.addFormVisibility }));
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.state.addFormVisibility ? 'Hide Form' : 'Show Form'}</Button>
        {this.state.addFormVisibility ? <AddFoodItem addTheFood={this.addFoodHandler} /> : null}
        <SearchForm searchFood={this.addSearch} />
        <div className="foodList">
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
              />
            ))
          }
        </div>
      </div>
    );
  }
}
export default DynamicFoodList;
