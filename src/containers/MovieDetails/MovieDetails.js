import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import InfoBar from '../../components/InfoBar/InfoBar';
import MovieItems from '../../components/MovieItems/MovieItems';
import MoviePanel from '../../components/MoviePanel/MoviePanel';


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
        genre: 'Horror, Sci-Fi, Thriller, Adventure',
        imageUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/a90dd0dd-a8ae-4112-9865-23eb8f5879a8/360',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 165
    },
    {
        id: 333,
        title: 'Monster trucks',
        date: '2019',
        rating: '3.9',
        genre: 'Adventure, Action, Comedy',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/5/5e/Monster_Trucks_%28film%29.jpg',
        description: 'Vin Diesel fans who can’t wait for the next installment of the “Fast and Furious” macho soap opera series can get their fix at “Bloodshot,” a comic book adaptation that’s as big a stickler about “family” yet far less satisfying than even the worst films of the "Fast" franchise. The family in question here is the wife of Ray Garrison (Diesel), who is put in danger by her spouse’s mercenary soldiering. Now, if you want to walk into director Dave Wilson’s sci-fi actioner as blindly as I did, exit this review now. If you desire a hint of what you’re in for, let me leave you with a few phrases you would have encountered had you stuck around: “Universal Soldier,” “robotic cucarachas,” “needle drop abuse of the Talking Heads” and “blatant rip-off.”',
        duration: 154
    },
    {
        id: 444,
        title: 'Cold comes the night',
        date: '2016',
        rating: '4.4',
        genre: 'Drama, Thriller, Crime, Adventure',
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
            <Auxiliary>
                <MoviePanel selectedMovie={this.state.chosenMovieItem}/>
                <InfoBar resultText={'Films by ' + this.state.genre + ' genre'} showFilter="false"/>
                <MovieItems chosenItem={this.chosenItemHandler} movieItems={this.state.movieItems}/>
            </Auxiliary>
        )
    }
}

export default MovieDetails;