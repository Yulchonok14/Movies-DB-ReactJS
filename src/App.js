import React from 'react';

import Layout from './hoc/Layout/Layout';
import MovieHunter from './containers/MovieHunter/MovieHunter';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <Layout>
                <MovieHunter/>
                <MovieDetails/>
            </Layout>
        </ErrorBoundary>
    )
};

export default App;