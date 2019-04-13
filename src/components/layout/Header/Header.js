import React from 'react';
import classes from './Header.css';
import Navbar from '../Navbar/Navbar';


 const Header = () => {
  return (
    <header className={classes.Header}>   
        
        <section className={classes.Main}>
            <div>
                54 Avenue Colin, Montréal, QC CANADA
            </div>
            <div>
                <h1>TRIANO</h1>
                <h4>ALWAYS DELICIOUS</h4>
            </div>
            <div>
                <div>
                    +1 514 123 1234
                </div>
                <div>
                    triano_restaurant@mymail.com
                </div>
            </div>
        </section>


        <Navbar />
            
    </header>
  )
}

export default Header;


/*

import { Spring } from 'react-spring/renderprops'


<Spring
                from={ {opacity:0, marginTop: -500 }}
                to={{opacity: 1, marginTop: 0 }}
                config={{duration: 500}}> 
                
                {props => (
                    <div style={props}>
                        <img src={this.props.img} className={classes.Img}/>             
                    </div>  
    
                )}
            </Spring>*/