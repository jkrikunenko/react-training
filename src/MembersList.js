import React from 'react';
import { Link } from 'react-router-dom';

import List from './common/List';
import ListElement from './common/ListElement';
import PrimaryButton from './common/PrimaryButton';
import RedButton from './common/RedButton';
import AddElement from './AddElement';
import { MEMBERS } from './common/data-mock';
import {SearchBar} from './SearchBar';

export class MembersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: MEMBERS,
            searchString: '',
            newElement: ''
        };
        this.deleteMember = this.deleteMember.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearchInput = this.onSearchInput.bind(this);
        this.onUpdateList = this.onUpdateList.bind(this);
        this.elementDeleted = false;
    }
    deleteMember(member, e) {
        e.stopPropagation();
        let members = this.props.list.slice();
        const index = members.findIndex((el) => el.id === member.id);
        members.splice(index, 1);
        this.props.onUpdateList(members);
        this.elementDeleted = true;
    }

    onInput(value) {
        this.setState({ newElement: value });
    }

    onSubmit() {
        const list = this.state.list.slice();
        const lastId = list[list.length - 1].id;
        const team = parseInt(this.props.match.params.id);
        list.push({ id: lastId + 1, team: team, name: this.state.newElement });
        this.setState({ list: list, newElement: '' });
    }

    // componentWillReceiveProps(nextProps) {
    //     const currentList = [];
    //     const nextList = [];
    //     const team = parseInt(this.props.match.params.id);
    //     const nextTeam = parseInt(nextProps.team);
    //     if (team === nextTeam) {
    //         this.props.list.forEach((member) => { member.team === team && currentList.push(member); });
    //         nextProps.list.forEach((member) => { member.team === team && nextList.push(member); });
    //         this.elementDeleted = nextList.length < currentList.length;
    //     } else {
    //         this.elementDeleted = false;
    //     }
    // }

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
        console.log('MembersList render');
        const rows = [];
        const team = parseInt(this.props.match.params.id);
        this.state.list.forEach((member) => {
            if (member.team === team && member.name.indexOf(this.state.searchString) > -1) {
                rows.push(
                    <ListElement key={member.name} onClick={this.handleClick}>
                        {member.name}
                        <PrimaryButton className='right' onClick={this.handleButtonClick}>
                            <Link to={`/members/${member.id}`}>
                                go to details
                            </Link>
                        </PrimaryButton>
                        <RedButton className='right' onClick={this.deleteMember.bind(this, member)}>
                            delete
                        </RedButton>
                    </ListElement>
                );
            }
        });
        return (
            <div>
                <SearchBar onSearchInput={this.onSearchInput} searchString={this.state.searchString} />
                {this.elementDeleted ? (<span style={{ color: 'red' }}>element was deleted</span>) : null}
                <List>{rows}</List>
                <AddElement onInput={this.onInput} onSubmit={this.onSubmit} element={this.state.newElement} />
            </div>
        );
    }


};

export default MembersList;