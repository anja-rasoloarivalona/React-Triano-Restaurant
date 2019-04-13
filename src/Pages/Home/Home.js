import React from 'react';
import Header from '../../components/layout/Header/Header';
import classes from './Home.css';
import home from '../../Assets/img/home.jpg';

import symbol from '../../Assets/icon/SVG/px.svg';
import ReactSVG from 'react-svg';


 const Home = () =>  {
  return (
    <React.Fragment>

        <Header background = {home}/>

        <section className={classes.WelcomeContainer}>  
               <div className={classes.Welcome}>
                    <h1 className={classes.WelcomeTitle}>Welcome</h1>
                    <h1 className={classes.Name}>THE TRIANO</h1>

                    <span className={classes.Line}>
                          <ReactSVG src={symbol} className={classes.Icon} />
                    </span>

                    <h3>The right place to be</h3>

               
               </div>          
        </section>

    </React.Fragment>
  )
}

export default Home;

