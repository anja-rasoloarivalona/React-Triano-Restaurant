import React, { Component } from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import classes from './App.css';

import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Drinks from './Pages/Drinks/Drinks';
import Rooftop from './Pages/Rooftop/Rooftop';
import Reservation from './Pages/Reservation/Reservation';
import About from './Pages/About/About';

import ScrollToTop from './components/layout/hoc/animation/ScrollTop';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import  './App.css';




class App extends Component {
  render() {
    return (

        <Router>
          <section className={classes.Container}>
          <Header />
                    <Switch>

                      
                        <ScrollToTop>  
                        <Route exact path="/" component={Home}></Route>                     
                          <Route path="/about" component={About}></Route>      
                          <Route path="/menu" component={Menu}></Route>
                          <Route path="/drinks" component={Drinks}></Route>
                          <Route path="/rooftop" component={Rooftop}></Route>
                          <Route path="/reservation" component={Reservation}></Route>
                       
                          </ScrollToTop>
                      </Switch>

                <Footer />
          </section>
          

        </Router>

       

 
      
        

    );
  }
}

export default App;

/*
const AppLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-template-columns: 
      [full-start] 15rem 
      [center-start] repeat(2, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 15rem [full-end];
`

const AppMain = styled.section`
  grid-row: 2 / 3;
  grid-column: center-start / center-end;
`

*/
