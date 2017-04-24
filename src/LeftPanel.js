import React from 'react';

import {SearchBar} from './SearchBar';
import TeamsList from './TeamsList';
import Panel from './common/Panel';

class LeftPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: ''
        };
        this.onSearchInput = this.onSearchInput.bind(this);
    }

    onSearchInput(searchString) {
        this.setState({
            searchString: searchString
        });
    }

    render() {
        console.log('LeftPanel render');
       return (
            <Panel width='20%'>
                <SearchBar onSearchInput={this.onSearchInput} searchString={this.state.searchString} />
                <TeamsList searchString={this.state.searchString} />
            </Panel>
       );
    }
}

export default LeftPanel;