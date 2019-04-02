import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import menu from '../../Assets/img/menu.jpg';
import classes from './Menu.css';

class Menu extends Component {
  render() {
    return (

      <React.Fragment>
          <Header 
            titleStart= ' '
            titleMid='Menus'
            titleEnd= ' '
            img={menu}
          />

          <section className={classes.Menu}>

              <div className={classes.Content}>

                  <h3 className={classes.Title}>Starters</h3>

                  <ul className={classes.List}>

                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>French onion soup</h4>
                            <div className={classes.ItemContent}>Gratin with Gruyere Cheese</div>
                        </div>
                        <div className={classes.Price}>$23</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Escargot</h4>
                            <div className={classes.ItemContent}>In a Parsley and Garlic Butter Sauce</div>
                        </div>
                        <div className={classes.Price}>$33</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Quiche of the day</h4>
                            <div className={classes.ItemContent}>With Mesclun Salad on the side</div>
                        </div>
                        <div className={classes.Price}>$15</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Beef Tartar</h4>
                            <div className={classes.ItemContent}>Shallots, Mustard, Chives, Sriracha and Parsley</div>
                        </div>
                        <div className={classes.Price}>$27</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Mesclun salad</h4>
                            <div className={classes.ItemContent}>Dried Cranberries, Pistachios and a Balsamic Vinaigrette</div>
                        </div>
                        <div className={classes.Price}>$14</div>
                    </li>

                  </ul>
              </div>

              <div className={classes.Content}>

                  <h3 className={classes.Title}>Main course</h3>

                  <ul className={classes.List}>

                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Salmon steak</h4>
                            <div className={classes.ItemContent}>Creamy Dill Sauce and a side of Cous Cous with Merguez Sausage</div>
                        </div>
                        <div className={classes.Price}>$30</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Shrimp risotto</h4>
                            <div className={classes.ItemContent}>Caramelized Fennel, Cherry Tomatoes, Lemon and a Saffron Foam</div>
                        </div>
                        <div className={classes.Price}>$20</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Pan seared trout</h4>
                            <div className={classes.ItemContent}>In a Roasted Garlic and Herbs de Provençe</div>
                        </div>
                        <div className={classes.Price}>$18</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Pork medallions</h4>
                            <div className={classes.ItemContent}>stuffed with Granny Smith Apple and Rosemary</div>
                        </div>
                        <div className={classes.Price}>$25</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Caribean Lobster tail</h4>
                            <div className={classes.ItemContent}>Brandy Beurre Noir with side of Haricot Verts Sauté</div>
                        </div>
                        <div className={classes.Price}>$53</div>
                    </li>

                  </ul>
              </div>

              <div className={classes.Content}>

                  <h3 className={classes.Title}>Desserts</h3>

                  <ul className={classes.List}>

                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Crêpe Suzette</h4>
                            <div className={classes.ItemContent}>Orange Butter Sauce and Grand Marnier</div>
                        </div>
                        <div className={classes.Price}>$13</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Warm thin crust apple tart</h4>
                            <div className={classes.ItemContent}>Apricot Glaze, Almond Paste and Vanilla Ice Cream</div>
                        </div>
                        <div className={classes.Price}>$23</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Dark chocolate mousse</h4>
                            <div className={classes.ItemContent}>perfumed with Rum Barrilito</div>
                        </div>
                        <div className={classes.Price}>$11</div>
                    </li>
                    <li className={classes.Item}>
                        <div>
                            <h4 className={classes.ItemTitle}>Soufflé of the day</h4>
                            <div className={classes.ItemContent}>Banana</div>
                        </div>
                        <div className={classes.Price}>$18</div>
                    </li>
                  </ul>
              </div>

              
          </section>

          
    </React.Fragment>


    )
  }
}

export default Menu;
