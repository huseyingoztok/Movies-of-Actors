import React from "react";

import Movie from "../Movie/Movie";
import "./MovieList.css";

const MovieList = props => {
    return (
        <div className="col-md-3 moviesList">
            {props.movieList.map(movie => (
                <Movie
                    movie={movie}
                    key={movie.id + Math.random()}
                    movieSelected={props.movieSelected} />
            ))}
        </div>
    )
}

export default MovieList;