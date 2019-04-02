import React, { Component } from 'react';
import classes from './Header.css';
import { Spring } from 'react-spring/renderprops'


class Header extends Component {

    render () {
        return (

        <section>
            <Spring
                from={ {opacity:0, marginTop: -500 }}
                to={{opacity: 1, marginTop: 0 }}
                config={{duration: 1100}}> 
                
                {props => (
                    <div style={props}>
                        <img src={this.props.img} className={classes.Img}/>             
                    </div>  
    
                )}
            </Spring>
    
            <div className={classes.TitleContainer}>
                <h1 className={classes.Title}>{this.props.titleStart}</h1>
                <h1 className={[classes.TitleMid, classes.Title].join(' ')}> {this.props.titleMid} </h1>
                <h1 className={classes.Title}>{this.props.titleEnd}</h1>
            </div>
            
        </section>
        )
    }
}

   

  


export default Header;


