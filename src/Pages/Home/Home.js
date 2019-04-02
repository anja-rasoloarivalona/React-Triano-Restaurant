import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import home from '../../Assets/img/home.jpg'

 class Home extends Component {
  render() {
    return (
      <Header 
        titleStart = "Discover"
        titleMid = "Triano"
        titleEnd = "Restaurant"
        img={home}
      />

      
    )
  }
}

export default Home;
