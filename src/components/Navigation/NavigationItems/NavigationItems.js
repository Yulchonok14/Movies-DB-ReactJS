import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Magnifier from '../../../assets/images/magnifier.png';

const NavigationItems = (props) => {
    const showSearch = props.location.pathname.includes('film') ? 'block' : 'none';
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                <img style={{display: showSearch}} src={Magnifier} alt="MagnifierSign"/>
            </NavigationItem>
        </ul>
    )
};

export default withRouter(NavigationItems);