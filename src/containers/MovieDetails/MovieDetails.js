import React, { Component } from 'react';

import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';
import MoviePanel from '../../components/MoviePanel/MoviePanel';

import { movieItems } from '../../__mocks__/movieItems';

class MovieDetails extends Component {

    state = {
        chosenMovieItem: movieItems[0],
        movieItems: [],
        genre: movieItems[0].genre.slice(0, movieItems[0].genre.indexOf(','))
    };

    componentDidMount() {
        this.searchMovieByGenre(this.state.genre.toLowerCase());
    }

    chosenItemHandler = (chosenItemIndex) => {
        const chosenItem = this.state.movieItems[chosenItemIndex];
        const genre = chosenItem.genre;
        const tranformedGenre = genre.slice(0, genre.indexOf(','));
        this.setState({chosenMovieItem: chosenItem}, () => {
            if(tranformedGenre.toLowerCase() !== this.state.genre.toLowerCase()) {
                this.setState({genre: tranformedGenre});
            }
            this.searchMovieByGenre(tranformedGenre.toLowerCase());
        });
    };

    searchMovieByGenre = (genre) => {
        const foundMovieItem = movieItems.filter(item =>
            item.genre.toLowerCase().includes(genre) && item.id !== this.state.chosenMovieItem.id
        );

        this.setState({movieItems: foundMovieItem});
    };

    render() {
        return (
            <React.Fragment>
                <MoviePanel selectedMovie={this.state.chosenMovieItem}/>
                <InfoBar resultText={'Films by ' + this.state.genre + ' genre'}/>
                <MovieItems chosenItem={this.chosenItemHandler} movieItems={this.state.movieItems}/>
            </React.Fragment>
        )
    }
}

export default MovieDetails;