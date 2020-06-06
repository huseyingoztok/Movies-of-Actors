import React from "react";

import Actor from "../Actor/Actor";
import "./ActorList.css";

const ActorList = props => {
    return (
        <div className="col-md-3 actorList">
            {props.actorList.map(actor => (
                <Actor
                    actor={actor}
                    key={actor.id}
                    actorSelected={props.actorSelected} />
            ))}
        </div>
    )
}

export default ActorList;