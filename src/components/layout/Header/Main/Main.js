import React from 'react';
import classes from './Main.css';

 const Main = () => {
  return (
    <section className={classes.Main}>
            <div>
                54 Avenue Colin, Montréal, QC CANADA
            </div>
            <div className={classes.TitleContainer}>
                <h1 className={classes.Title}>Triano</h1>
                <h4 className={classes.Subtitle}>ALWAYS DELICIOUS</h4>
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
  )
}

export default Main; 