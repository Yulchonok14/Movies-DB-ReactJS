import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar/>
            <main className={classes.MainPanel}>{props.children}</main>
            <Footer/>
        </Auxiliary>
    )
};

export default layout;