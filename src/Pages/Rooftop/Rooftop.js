import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import roof from '../../Assets/img/roof.jpg'


 class Rooftop extends Component {
  render() {
    return (
      <Header 
        titleStart= ' '
        titleMid='Rooftop'
        titleEnd= ' '
        img={roof}
      />
    )
  }
}

export default Rooftop;
