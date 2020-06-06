import React from 'react';

import ListItem from "../baseComponents/ListItem/ListItem";

const Movie = props => {
    const { movie } = props;
    return (
        <ListItem
            item={movie}
            name={movie.title}
            imagePath={movie.poster_path}
            itemSelected={props.movieSelected} />
    );
};

export default Movie;