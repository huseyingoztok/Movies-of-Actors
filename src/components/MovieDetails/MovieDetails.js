import React from "react";

import { formImageUrl } from "../../shared/utility";

import "./MovieDetails.css";

const MovieDetails = props => {
    const { movie } = props;
    const imagePath = formImageUrl(movie.poster_path);

    return (
        <div className="movie-details col-md-6">
            <div className="row">
                <div className="col-md-12">
                    <h1>
                        {movie.title}
                        <hr />
                    </h1>
                </div>
                <div className="col-md-5">
                    <img
                        src={imagePath}
                        alt={movie.name}
                    />
                </div>
                <div className="col-md-7">
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;