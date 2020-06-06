import React from 'react';

import ListItem from "../baseComponents/ListItem/ListItem";

const Actor = props => {
    const { actor } = props;
    return (
        <ListItem
            item={actor}
            name={actor.name}
            imagePath={actor.profile_path}
            itemSelected={props.actorSelected} />
    );
};
export default Actor;