import React, { Component } from 'react';

import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';
import { movieItems } from '../../__mocks__/movieItems';
import { sortByButtonsArr } from '../../__mocks__/sortButtons';
import { searchByButtonsArr } from '../../__mocks__/searchButtons';

class MovieHunter extends Component {

    state = {
        movieItems: movieItems,
        searchFilterArr: searchByButtonsArr,
        sortFilterArr: sortByButtonsArr,
        chosenMovieItem: null
    };

    switchSearchFilterHandler = (selectedIndex) => {
        const updatedSearchFilterArr = [...this.state.searchFilterArr];
        updatedSearchFilterArr.map((btn, index) => {
            btn.isActive = false;
            if (selectedIndex === index) {
                btn.isActive = !btn.isActive;
            }
        });
        this.setState({searchFilterArr: updatedSearchFilterArr});
    };

    switchSortFilterHandler = (selectedIndex) => {
        const updatedSortFilterArr = [...this.state.sortFilterArr];
        updatedSortFilterArr.map((btn, index) => {
            btn.isActive = false;
            if (selectedIndex === index) {
                btn.isActive = !btn.isActive;
            }
        });
        this.setState({sortFilterArr: updatedSortFilterArr});

        const sortedMovieItems = [...this.state.movieItems];
        const sortBy = selectedIndex ? 'rating' : 'date';
        sortedMovieItems.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
        this.setState({movieItems: sortedMovieItems});
    };

    chosenItemHandler = (chosenItemIndex) => {
        const chosenItem = this.state.movieItems[chosenItemIndex];
        this.setState({chosenMovieItem: chosenItem});
    };

     searchBtnHandler = (text) => {
        let searchBy = null;
        this.state.searchFilterArr.map(item => {
            if(item.isActive) {
                searchBy = item.text;
            }
        });
        const foundMovieItem = movieItems.filter(item =>
            item[searchBy].toLowerCase().includes(text)
        );

        this.setState({movieItems: foundMovieItem});
    };

    render() {
        return (
            <React.Fragment>
                <SearchPanel
                    searchBtn={this.searchBtnHandler}
                    switchSearchFilter={this.switchSearchFilterHandler}
                    showSearch
                    label={'search by'}
                    searchByFilter={this.state.searchFilterArr}/>
                <InfoBar
                    switchSearchFilter={this.switchSortFilterHandler}
                    resultText={this.state.movieItems.length + ' movie found'}
                    showFilter
                    label={'sort by'}
                    sortByFilter={this.state.sortFilterArr}/>
                <MovieItems chosenItem={this.chosenItemHandler} movieItems={this.state.movieItems}/>
            </React.Fragment>
        )
    }
}

export default MovieHunter;