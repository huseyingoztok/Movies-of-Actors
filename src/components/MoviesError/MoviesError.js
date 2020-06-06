import React from 'react';

import Error from "../baseComponents/Error/Error";
import "./MoviesError.css";

const MoviesError = (props) => (
    <Error className="moviesError" errorMessage={props.errorMessage} />
);

export default MoviesError;