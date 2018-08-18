import React from "react";
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  //Transform object into an array of items
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return (
      <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}:</span>{props.ingredients[igKey]}</li>
    )
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicouse burger with the following ingredients:</p>
      <ul>
       {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  )
};

export default orderSummary;