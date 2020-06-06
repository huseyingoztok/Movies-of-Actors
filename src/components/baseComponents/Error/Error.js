import React from 'react';

const Error = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.errorMessage}</h3>
        </div>
    )
};

export default Error;