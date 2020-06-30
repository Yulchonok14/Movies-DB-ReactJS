import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';
import MoviePanel from '../../components/MoviePanel/MoviePanel';
import * as actionCreators from '../../store/actions/index';

export class MovieDetails extends Component {


    componentWillMount() {
        this.unlisten = this.props.history.listen((location) => {
            const movieId = location.pathname.slice(location.pathname.lastIndexOf('/')+1, location.pathname.length);
            this.props.onMovieSearchedById(movieId)
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.onMovieSearchedById(movieId);
    }

    componentDidUpdate(prevProps) {

        if (this.props.chosenMovieItem !== prevProps.chosenMovieItem) {
            this.props.onMovieSearched(this.props.chosenMovieItem.genres[0]);
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
            movieDetails =
                <React.Fragment>
                    <MoviePanel selectedMovie={this.props.chosenMovieItem}/>
                    <InfoBar resultText={'Films by ' + this.props.chosenMovieItem.genres[0] + ' genre'}/>
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