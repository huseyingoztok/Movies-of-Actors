import React, { Component } from "react";
import axios from "axios";

import SearchBar from "../SearchBar/SearchBar";
import ActorList from "../ActorList/ActorList";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import Spinner from "../UI/Spinner/Spinner";
import MoviesError from "../MoviesError/MoviesError";

const url = "https://api.themoviedb.org/3/";
const apiKey = "your-api-key";
const actorNotFound = "Actor/Actress cannot be found. Please try another search..";
const moviesNotFound = "Movies of actor/actress cannot be found.";

class ActorMovies extends Component {

    state = {
        movieList: null,
        actorList: null,
        selectedActor: null,
        selectedMovie: null,
        error: false,
        errorMessage: null,
        searchButtonClicked: false
    }

    clearAllState = () => {
        this.setState({
            movieList: null,
            actorList: null,
            selectedActor: null,
            selectedMovie: null,
            error: false,
            errorMessage: null,
            searchButtonClicked: false
        })
    }

    clearMovieState = () => {
        this.setState({
            movieList: null,
            selectedMovie: null,
            error: false,
            errorMessage: null
        })
    }

    selectMovieHandler = (movie) => {
        this.setState({ selectedMovie: movie });
    }

    selectActorHandler = async (actor) => {
        this.clearMovieState();
        this.setState({ selectedActor: actor });
        const movieList = await this.searchMovieList(actor.id);
        if (movieList.length > 0) {
            this.setState({ movieList: movieList });
        }
        else {
            this.setState({ error: true, errorMessage: moviesNotFound });
        }
    }

    searchTermHandler = (term) => {
        this.searchActorList(term);
    }

    searchActorList = (term) => {
        this.clearAllState();
        this.setState({ searchButtonClicked: true });
        if (term) {
            const actorName = encodeURI(term);
            let urlParameters = `${url}search/person?api_key=${apiKey}&query=${actorName}`;

            axios.get(urlParameters)
                .then(response => {
                    if (response.data.results.length > 0) {
                        const actorList = response.data.results.filter(actor => actor.profile_path != null);
                        this.setState({ actorList: actorList });
                    }
                    else {
                        this.setState({ error: true, errorMessage: actorNotFound });
                    }
                })
                .catch(error => {
                    this.setState({ error: true, errorMessage: error.message });
                });
        }
        else {
            this.setState({ error: true, errorMessage: "Please enter an actor/actress name in the search box." });
        }
    }

    searchMovieList = async (id) => {
        if (id) {
            try {
                const urlParameters = `${url}person/${id}/movie_credits?api_key=${apiKey}&language=en-US`;
                const response = await axios.get(urlParameters);
                const movieList = response.data.cast.filter(movie => movie.poster_path !== null)
                return movieList;
            }
            catch (error) {
                this.setState({ error: true, errorMessage: error.message });
            };
        }
        else {
            this.setState({ error: true, errorMessage: "Id cannot be null." });
        }
    }

    render() {

        let actors = this.state.searchButtonClicked ?
            (this.state.error ?
                <h3>{this.state.errorMessage}</h3> :
                <Spinner />) :
            null;

        if (this.state.actorList) {
            if (this.state.actorList.length > 0) {
                let movies = null;
                if (this.state.selectedActor) {
                    movies = this.state.error ?
                        <MoviesError errorMessage={this.state.errorMessage} /> :
                        <Spinner />;
                    if (this.state.movieList) {
                        movies = (
                            <div>
                                <MovieList
                                    movieList={this.state.movieList}
                                    movieSelected={this.selectMovieHandler} />
                                {<MovieDetails movie={this.state.selectedMovie || this.state.movieList[0]} />}
                            </div>
                        )
                    }
                }
                actors = (
                    <div>
                        <div className="row">
                            <ActorList
                                actorList={this.state.actorList}
                                actorSelected={this.selectActorHandler} />
                            {movies}
                        </div>
                    </div>
                )
            }
            else {
                actors = <h3>{actorNotFound}</h3>
            }
        }

        return (
            <div className="container-fluid">
                <SearchBar
                    searchButtonClicked={this.searchTermHandler} />
                {actors}
            </div>
        )
    }
}

export default ActorMovies;
