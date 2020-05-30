import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Magnifier from '../../../assets/images/magnifier.png';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>
            <img src={Magnifier} alt="MagnifierSign"/>
        </NavigationItem>
    </ul>
);

export default navigationItems;