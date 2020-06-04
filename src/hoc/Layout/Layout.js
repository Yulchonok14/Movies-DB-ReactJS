import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.css';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar/>
            <main className={classes.MainPanel}>{props.children}</main>
            <Footer/>
        </React.Fragment>
    )
};

export default Layout;