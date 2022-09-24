import React, { Component } from "react";
import foods from '../foods.json';
import FoodBoxs from "./FoodBox";
import './DynamicFoodList.css'
import AddFoodItem from './AddFoodForm'
import SearchForm from "./SearchForm";
import { Button } from "antd";

class DynamicFoodList extends Component {
    state = {
        foods: foods,
        queryText: '',
        addFormVisibility: true
    }
    addFoodHandler = (foodItem) => {
      const FoodCopy = [...this.state.foods]; // copy!
      FoodCopy.push({
        name: foodItem.name,
        calories: foodItem.calories,
        image: foodItem.image,
        servings: foodItem.servings
      });
      
      this.setState({
        foods: FoodCopy
      })
    }

    addSearch = (queryText) =>{
      this.setState({
        queryText: queryText
      })
    }

    toggle = () =>{
      this.setState({
        addFormVisibility: !this.state.addFormVisibility
      })
    }
  
    render (){
    return (
      <div>
      <Button onClick={this.toggle}>{this.state.addFormVisibility? 'Hide Form': 'Show Form'}</Button>
      {this.state.addFormVisibility? <AddFoodItem addTheFood = {this.addFoodHandler}/> : null}
      <SearchForm searchFood = {this.addSearch}/>
        <div className="foodList">
          {
            this.state.foods.filter(obj => {
              return obj.name.toLowerCase().includes(this.state.queryText.toLowerCase())
            }).map(item => {
                return <FoodBoxs key={item.name} {...item}/>
            })
          }
        </div>
      </div>
      );
}
}
export default DynamicFoodList
