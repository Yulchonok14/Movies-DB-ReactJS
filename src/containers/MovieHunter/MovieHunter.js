import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';
import { sortByButtonsArr } from '../../__mocks__/sortButtons';
import { searchByButtonsArr } from '../../__mocks__/searchButtons';
import * as actionCreators from '../../store/actions/index';

export class MovieHunter extends Component {

    state = {
        searchFilterArr: searchByButtonsArr,
        sortFilterArr: sortByButtonsArr
    };

    componentDidUpdate(prevProps){
        if(this.props.sortFilter !== prevProps.sortFilter){
            this.props.onSortMovies();
        }
    }

    switchButtonAndGetText = (buttonArrName, selectedIndex) => {
        let text = '';
        const updatedArr = [...this.state[buttonArrName]];
        updatedArr.map((btn, index) => {
            btn.isActive = false;
            if (selectedIndex === index) {
                btn.isActive = !btn.isActive;
                text = btn.text;
            }
        });
        this.setState({[buttonArrName]: updatedArr});
        return text;
    };

    switchSearchFilterHandler = (selectedIndex) => {
        const filterText = this.switchButtonAndGetText('searchFilterArr', selectedIndex);
        this.props.onSearchFilterSwitched(filterText);
    };

    switchSortFilterHandler = (selectedIndex) => {
        const sortText = this.switchButtonAndGetText('sortFilterArr', selectedIndex);
        this.props.onSortFilterSwitched(sortText);
    };


    render() {
        return (
            <React.Fragment>
                <SearchPanel
                    searchBtn={(text) => this.props.onMovieSearched(text, this.props.searchFilter)}
                    switchSearchFilter={this.switchSearchFilterHandler}
                    showSearch
                    label={'search by'}
                    searchByFilter={this.state.searchFilterArr}/>
                <InfoBar
                    switchSearchFilter={this.switchSortFilterHandler}
                    resultText={this.props.movieItems.length + ' movie found'}
                    showFilter
                    label={'sort by'}
                    sortByFilter={this.state.sortFilterArr}/>
                <MovieItems chosenItem={this.props.onMovieChosen} movieItems={this.props.movieItems}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieItems: state.hunter.movieHunterItems,
        sortFilter: state.hunter.sortFilter,
        searchFilter: state.hunter.searchFilter
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        onMovieSearched: (text, searchFilter) => dispatch(actionCreators.searchMovieHunter(text, searchFilter)),
        onSortFilterSwitched: (text) => dispatch(actionCreators.sortFilter(text)),
        onSortMovies: () => dispatch(actionCreators.sortMovies()),
        onSearchFilterSwitched: (text) => dispatch(actionCreators.searchFilter(text)),
        onMovieChosen: (item) => dispatch(actionCreators.passChosenMovie(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieHunter);