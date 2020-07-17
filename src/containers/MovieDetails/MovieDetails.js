import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';
import MoviePanel from '../../components/MoviePanel/MoviePanel';
import * as actionCreators from '../../store/actions/index';

export class MovieDetails extends Component {

    componentWillUnmount() {
        this.unlisten();
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location) => {
                    const movieId = +location.pathname.slice(location.pathname.lastIndexOf('/')+1, location.pathname.length);
                    Number.isInteger(movieId) && movieId > 0
                    ? this.props.onMovieSearchedById(movieId)
                    : null;
                });

        const movieId = this.props.match.params.id;
        this.props.onMovieSearchedById(movieId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.chosenMovieItem !== prevProps.chosenMovieItem
            && this.props.chosenMovieItem.id !== prevProps.chosenMovieItem.id) {
            this.props.chosenMovieItem.genres[0]
                ? this.props.onMovieSearched(this.props.chosenMovieItem.genres[0])
                : null;
        }
    }

    chooseMovieHandler = (movieItem) => {
        this.props.onMovieChosen(movieItem);
        this.props.history.push({
            pathname: '/film/' + movieItem.id
        });
    };

    render() {
        let movieDetails = null;
        if (this.props.chosenMovieItem) {
            const genre = this.props.chosenMovieItem.genres[0] || 'unknown';
            movieDetails =
                <React.Fragment>
                    <MoviePanel selectedMovie={this.props.chosenMovieItem}/>
                    <InfoBar resultText={'Films by ' + genre + ' genre'}/>
                    <MovieItems chosenItem={this.chooseMovieHandler} movieItems={this.props.movieItems}/>
                </React.Fragment>;
        }
        return (
            <React.Fragment>
                {movieDetails}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieItems: state.details.movieDetailsItems,
        chosenMovieItem: state.details.chosenMovieItem
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        onMovieSearched: (text) => dispatch(actionCreators.searchMovieDetails(text)),
        onMovieSearchedById: (id) => dispatch(actionCreators.getMovieDetails(id)),
        onMovieChosen: (movieItem) => dispatch(actionCreators.chooseMovieDetails(movieItem))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);