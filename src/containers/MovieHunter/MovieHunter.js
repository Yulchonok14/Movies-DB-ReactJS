import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';

const sortByButtonsArr = [
    {id: 111, text: 'release date', isActive: true},
    {id: 222, text: 'rating', isActive: false}
];

const searchByButtonsArr = [
    {id: 111, text: 'title', isActive: true},
    {id: 222, text: 'genre', isActive: false}
];

const movieItems = [
    {
        id: 111,
        title: 'Bloodshot',
        date: '2020',
        rating: '3.6',
        genre: 'Action, Drama, Sci-Fi',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Bloodshot_poster.jpg',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 110
    },
    {
        id: 222,
        title: 'The invisible man',
        date: '2019',
        rating: '4.6',
        genre: 'Horror, Sci-Fi, Thriller',
        imageUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/a90dd0dd-a8ae-4112-9865-23eb8f5879a8/360',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 165
    },
    {
        id: 333,
        title: 'Monster trucks',
        date: '2019',
        rating: '3.9',
        genre: 'Action, Adventure, Comedy',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/5/5e/Monster_Trucks_%28film%29.jpg',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 154
    },
    {
        id: 444,
        title: 'Cold comes the night',
        date: '2016',
        rating: '4.4',
        genre: 'Drama, Thriller, Crime',
        imageUrl: 'https://laughingsquid.com/wp-content/uploads/2014/01/CCTN_poster_Billy_HD-for-web.jpg',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 129
    },
    {
        id: 555,
        title: 'Snowden',
        date: '2010',
        rating: '4.8',
        genre: 'Drama, Thriller, Biography',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/1/1a/Snowden_%28film%29.jpg',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 113
    },
    {
        id: 666,
        title: 'Knock knock',
        date: '2011',
        rating: '2.6',
        genre: 'Horror, Thriller',
        imageUrl: 'https://i1.wp.com/morbidlybeautiful.com/wp-content/uploads/2015/10/kk-2.jpg',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 187
    }
];

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
            <Auxiliary>
                <SearchPanel
                    searchBtn={this.searchBtnHandler}
                    switchSearchFilter={this.switchSearchFilterHandler}
                    showSearch="true"
                    label={'search by'}
                    searchByFilter={this.state.searchFilterArr}/>
                <InfoBar
                    switchSearchFilter={this.switchSortFilterHandler}
                    resultText={this.state.movieItems.length + ' movie found'}
                    showFilter="true"
                    label={'sort by'}
                    sortByFilter={this.state.sortFilterArr}/>
                <MovieItems chosenItem={this.chosenItemHandler} movieItems={this.state.movieItems}/>
            </Auxiliary>
        )
    }
}

export default MovieHunter;