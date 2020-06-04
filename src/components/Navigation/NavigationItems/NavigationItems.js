import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Magnifier from '../../../assets/images/magnifier.png';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>
            <img src={Magnifier} alt="MagnifierSign"/>
        </NavigationItem>
    </ul>
);

export default NavigationItems;