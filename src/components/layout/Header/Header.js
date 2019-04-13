import React from 'react';
import classes from './Header.css';
import Navbar from '../Navbar/Navbar';
import Main from '../Header/Main/Main';


 const Header = (props) => {
  return (
    <header 
        className={classes.Header}
        style={{backgroundImage: "url(" + props.background + ")"}}>>          
        
            <Main />
            <Navbar />
           
    </header>
  )
}

export default Header;

