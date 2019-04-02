import React, { Component } from 'react'
import classes from './Header.css'
const Header = (props) => (
    <section>
        <img src={props.img} className={classes.Img}/>
        <div className={classes.TitleContainer}>
            <h1 className={classes.Title}>{props.titleStart}</h1>
            <h1 className={[classes.TitleMid, classes.Title].join(' ')}> {props.titleMid} </h1>
            <h1 className={classes.Title}>{props.titleEnd}</h1>
        </div>
        
    </section>
);

export default Header;
