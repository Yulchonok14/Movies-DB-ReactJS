import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import MovieHunter from './containers/MovieHunter/MovieHunter';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
    return (
        <ErrorBoundary>
            <Layout>
                <Switch>
                    <Route path="/film/:id" component={MovieDetails}/>
                    <Route path="/search/:text" component={MovieHunter}/>
                    <Route path="/" exact component={MovieHunter}/>
                    <Route path="*" exact component={PageNotFound}/>
                </Switch>
            </Layout>
        </ErrorBoundary>
    )
};

export default App;