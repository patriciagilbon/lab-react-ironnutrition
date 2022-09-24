import React from "react";

const FoodCard = props => {
    return (
      <div>
      <p> {props.name}</p>
      <img src={props.image} alt="food"/>
    </div>
    );
  };
   
  export default FoodCard;