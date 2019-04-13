import React from 'react';
import classes from './About.css';
import Header from '../../components/layout/Header/Header';
import home from '../../Assets/img/home.jpg';

const About = () => {
  return (
    <React.Fragment>
        <Header background = {home}/>

        <section className={classes.Welcome}>               
        </section>

    </React.Fragment>
  )
}

export default About;
