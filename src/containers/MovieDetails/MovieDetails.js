import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';
import MoviePanel from '../../components/MoviePanel/MoviePanel';
import * as actionCreators from '../../store/actions/index';

export class MovieDetails extends Component {

    componentDidUpdate(prevProps){
        if(this.props.chosenMovieItem !== prevProps.chosenMovieItem){
            this.props.onMovieSearched(this.props.chosenMovieItem.genres[0]);
        }
    }

    render() {
        return (
            <React.Fragment>
                <MoviePanel selectedMovie={this.props.chosenMovieItem}/>
                <InfoBar resultText={'Films by ' + this.props.chosenMovieItem.genres[0] + ' genre'}/>
                <MovieItems chosenItem={this.props.onMovieChosen} movieItems={this.props.movieItems}/>
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
        onMovieChosen: (id) => dispatch(actionCreators.chooseMovieDetails(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);