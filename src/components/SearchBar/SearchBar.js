import React, { Component } from 'react';

import "./SearchBar.css";

class SearchBar extends Component {

    state = {
        searchTerm: ""
    }

    inputChangedHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    enterPressedHandler = event => {
        if (event.key === "Enter") {
            this.props.searchButtonClicked(this.state.searchTerm);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-4">
                    <div className="searchBar">
                        <input
                            value={this.state.searchTerm}
                            onChange={this.inputChangedHandler}
                            onKeyPress={this.enterPressedHandler} />
                        <button
                            onClick={() => this.props.searchButtonClicked(this.state.searchTerm)}>
                            <i className="fa fa-search" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
