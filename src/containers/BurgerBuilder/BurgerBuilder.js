import React, { Component } from 'react';

//wrapping HOC component
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

  render(){
    return(
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;