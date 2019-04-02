import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import drinks from '../../Assets/img/drinks.jpg'

class Drinks extends Component {
  render() {
    return (
      <Header 
        titleStart= ' '
        titleMid='Menus'
        titleEnd= ' '
        img={drinks}
      />
    )
  }
}

export default Drinks;
