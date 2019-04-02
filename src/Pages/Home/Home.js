import React, { Component } from 'react';
import Header from '../../components/layout/Header/Header';
import home from '../../Assets/img/home.jpg';
import classes from './Home.css';

import chef_2 from '../../Assets/img/2.jpg';
import chef_1 from '../../Assets/img/1.JPG';


 class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header 
          titleStart = "Discover"
          titleMid = "Triano"
          titleEnd = "Restaurant"
          img={home}
        />

      <main className={classes.Main}>
        <section className={classes.Intro}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <b>the Triano Restaurant</b>.</p>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae quasi possimus voluptatum autem sequi. Earum rerum quaerat id consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum eveniet minima suscipit quasi temporibus ad molestiae ea quod consequuntur maxime sunt eligendi eos et rem, accusamus id recusandae aliquam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo iusto doloremque inventore expedita, provident nostrum, aut veniam enim dolor numquam incidunt vitae cum.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos quia sunt excepturi reprehenderit necessitatibus possimus aliquam placeat eligendi eos.</p>
        </section>

        <section className={classes.Chef}>
            <div>
                <img src={chef_1} alt="Image Chef" className={classes.ChefImg}/>
                <div className={classes.Text1}>
                        <h2 className="title-secondary">Jeanne Doe</h2>
                        <h2 className="title-secondary">a michelin starred chef</h2>
                        <div>
                            With 12 consecutive years heralded by three Michelin stars, Christian Le Squer has given proof of exemplary regularity. He is a determined and serene Chef who defines himself as a creator of flavors and composer of tastes. Like a couturier or a perfumer, he shapes and assembles products in order to enhance them and obtain the most exacting flavors with perfect coherence.
                        </div>
                </div>  
            </div>
            <div>
                <img src={chef_2} alt="Image Chef" className={classes.ChefImg}/>
                <div className={classes.Text2}>
                        <h2 className="title-secondary">Jeanne Doe</h2>
                        <h2 className="title-secondary">a michelin starred chef</h2>
                        <div>
                            With 12 consecutive years heralded by three Michelin stars, Christian Le Squer has given proof of exemplary regularity. He is a determined and serene Chef who defines himself as a creator of flavors and composer of tastes. Like a couturier or a perfumer, he shapes and assembles products in order to enhance them and obtain the most exacting flavors with perfect coherence.
                        </div>
                </div>  
            </div>
        
        </section>
  </main>

      </React.Fragment>

    )
  }
}

export default Home;
