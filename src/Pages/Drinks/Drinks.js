import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import drinks from '../../Assets/img/drinks.jpg';
import classes from './Drinks.css'

class Drinks extends Component {
  render() {
    return (

      <React.Fragment>
        <Header 
        titleStart= ' '
        titleMid='Drinks'
        titleEnd= ' '
        img={drinks}
      />

      <section className={classes.Drinks}>

        <div className={classes.Content}>
              <div className={classes.Title}>
                  <div className={classes.TitleItem}>Champagne & Sparklings</div>
                  <div className={classes.Size}>6 oz</div>
                  <div className={classes.Size}>Bottle</div>
              </div>

              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Prosecco, Antica Vigna</h4>
                      <div className={classes.ItemContent}>Veneto, IT</div>
                  </div>
                  <div className={classes.Price}>$13</div>
                  <div className={classes.Price}>$43</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Cava, Louis de Vernier</h4>
                      <div className={classes.ItemContent}>Penedès, SPN</div>
                  </div>
                  <div className={classes.Price}>$11</div>
                  <div className={classes.Price}>$46</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Veuve Clicquot</h4>
                      <div className={classes.ItemContent}>Champagne, FR</div>
                  </div>
                  <div className={classes.Price}>$53</div>
                  <div className={classes.Price}>$83</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Fleury Boléro</h4>
                      <div className={classes.ItemContent}>Champagne, FR</div>
                  </div>
                  <div className={classes.Price}>$23</div>
                  <div className={classes.Price}>$53</div>
              </div>    
        </div>

        <div className={classes.Content}>
              <div className={classes.Title}>
                  <div className={classes.TitleItem}>White Wine & Rosé</div>
                  <div className={classes.Size}>6 oz</div>
                  <div className={classes.Size}>Bottle</div>
              </div>

              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Viognier, McManis Vineyards</h4>
                      <div className={classes.ItemContent}>Ripon, CA</div>
                  </div>
                  <div className={classes.Price}>$14</div>
                  <div className={classes.Price}>$36</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Pinot Grigio, Colleventi 921</h4>
                      <div className={classes.ItemContent}>Veneto, IT</div>
                  </div>
                  <div className={classes.Price}>$15</div>
                  <div className={classes.Price}>$33</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Chardonnay, Castle Rock</h4>
                      <div className={classes.ItemContent}>Central Coast, CA</div>
                  </div>
                  <div className={classes.Price}>$18</div>
                  <div className={classes.Price}>$36</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>17 Sancerre, Pascal Jolivet</h4>
                      <div className={classes.ItemContent}>Loire Valley, FR</div>
                  </div>
                  <div className={classes.Price}>$43</div>
                  <div className={classes.Price}>$80</div>
              </div>    
        </div>

        <div className={classes.Content}>
              <div className={classes.Title}>
                  <div className={classes.TitleItem}>Red Wine</div>
                  <div className={classes.Size}>6 oz</div>
                  <div className={classes.Size}>Bottle</div>
              </div>

              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Petite Sirah, McManis Vineyards</h4>
                      <div className={classes.ItemContent}>Ripon, CA</div>
                  </div>
                  <div className={classes.Price}>$18</div>
                  <div className={classes.Price}>$43</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Shiraz, Hunt</h4>
                      <div className={classes.ItemContent}>Mclaren Vale, AUS</div>
                  </div>
                  <div className={classes.Price}>$13</div>
                  <div className={classes.Price}>$37</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Merlot, Tinroof Cellars</h4>
                      <div className={classes.ItemContent}>California, US</div>
                  </div>
                  <div className={classes.Price}>$29</div>
                  <div className={classes.Price}>$43</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Malbec, Agostino Finca</h4>
                      <div className={classes.ItemContent}>Mendoza, AR</div>
                  </div>
                  <div className={classes.Price}>$13</div>
                  <div className={classes.Price}>$34</div>
              </div>    
        </div>

        <div className={classes.Content}>
              <div className={classes.Title}>
                  <div className={classes.TitleItem}>Cocktails & Extra</div>
                  <div className={classes.Size}>6 oz</div>
                  <div className={classes.Size}>Bottle</div>
              </div>

              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Banana Berry</h4>
                      <div className={classes.ItemContent}></div>
                  </div>
                  <div className={classes.Price}></div>
                  <div className={classes.Price}>$18</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Apple Crush</h4>
                      <div className={classes.ItemContent}></div>
                  </div>
                  <div className={classes.Price}></div>
                  <div className={classes.Price}>$10</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Hawaiian Breeze</h4>
                      <div className={classes.ItemContent}></div>
                  </div>
                  <div className={classes.Price}></div>
                  <div className={classes.Price}>$10</div>
              </div>
              <div className={classes.Item}>
                  <div className={classes.ItemDetails}>
                      <h4 className={classes.ItemTitle}>Bottled water</h4>
                      <div className={classes.ItemContent}></div>
                  </div>
                  <div className={classes.Price}></div>
                  <div className={classes.Price}>$10</div>
              </div>    
        </div>
      
      </section>


      </React.Fragment>
      
    )
  }
}

export default Drinks;
