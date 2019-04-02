import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import menu from '../../Assets/img/menu.jpg'
class Menu extends Component {
  render() {
    return (
      <Header 
        titleStart= ' '
        titleMid='Menus'
        titleEnd= ' '
        img={menu}
      />
    )
  }
}

export default Menu;
