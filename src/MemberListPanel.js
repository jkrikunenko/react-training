import React from 'react';
import { SearchBar } from './SearchBar';
import MembersList from './MembersList';
import { MEMBERS } from './common/data-mock';

export class MemberListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: MEMBERS,
            searchString: ''
        };
        this.onSearchInput = this.onSearchInput.bind(this);
        this.onUpdateList = this.onUpdateList.bind(this);
    }

    onSearchInput(searchString) {
        this.setState({
            searchString: searchString
        });
    }

    onUpdateList(list) {
        this.setState({
            list: list
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchInput={this.onSearchInput} searchString={this.state.searchString} />
                <MembersList list={this.state.list} searchString={this.state.searchString} team={this.props.match.params.id} onUpdateList={this.onUpdateList} />
            </div>
        );
    }
};

export default MemberListPanel;