import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchInput = this.onSearchInput.bind(this);
    }

    onSearchInput(e) {
        this.props.onSearchInput(e.target.value);
    }

    render() {
        return (
            <form>
                <input type='text' value={this.props.searchString} onChange={this.onSearchInput} placeholder='Filter list'></input>
            </form>
        );
    }
}