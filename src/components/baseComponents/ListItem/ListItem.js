import React from 'react';

import { formImageUrl } from "../../../shared/utility";
import "./ListItem.css";

const ListItem = props => {
    const imagePath = formImageUrl(props.imagePath);
    return (
        <div className="listItem"
            onClick={() => props.itemSelected(props.item)}>
            <div className="row">
                <div className="col-md-12">
                    <h3>
                        {props.name}
                        <hr />
                    </h3>
                </div>
                <div className="col-md-12">
                    <img
                        src={imagePath}
                        alt={props.name}
                    />
                </div>
            </div>
        </div>
    );
};
export default ListItem;