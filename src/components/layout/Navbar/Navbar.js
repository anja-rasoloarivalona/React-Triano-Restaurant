import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.css';
import logo from '../../../Assets/img/logo.png';
 class Navbar extends Component {
  render() {
    return (
      <nav className={classes.Navbar}>

            <Link to='/'>
                    <img src={logo} alt="store" className={classes.Logo}/>
            </Link>
        
          <ul className={classes.List}>
              <li>
                  <Link to="/" className={classes.Link}>Home</Link>
              </li>
              <li>
                  <Link to="/menu" className={classes.Link}>Menu</Link>
              </li>
              <li>
                  <Link to="/drinks" className={classes.Link}>Drinks</Link>
              </li>
              <li>
                  <Link to="/rooftop" className={classes.Link}>Rooftop</Link>
              </li>
              <li>
                  <Link to="/reservation" className={classes.Link}>Reservation</Link>
              </li>
          </ul>
      </nav>
    )
  }
}

export default Navbar;


