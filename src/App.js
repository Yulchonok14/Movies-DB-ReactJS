import React from 'react';

import Layout from './hoc/Layout/Layout';
import MovieHunter from './containers/MovieHunter/MovieHunter';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const app = () => {
    return (
        <ErrorBoundary>
            <Layout>
                <MovieHunter/>
            </Layout>
        </ErrorBoundary>
    )
};

export default app;