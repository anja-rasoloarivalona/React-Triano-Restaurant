import React from 'react';
import classes from './Header.css';
import Navbar from '../Navbar/Navbar';
import Main from '../Header/Main/Main';


 const Header = () => {
  return (
    <header className={classes.Header}>   
        
        <Main />
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