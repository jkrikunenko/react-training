import React from 'react';
import { NavLink } from 'react-router-dom';
import { TEAMS } from './common/data-mock';

import List from './common/List';
import ListElement from './common/ListElement';
import PrimaryButton from './common/PrimaryButton';
import RedButton from './common/RedButton';
import AddElement from './AddElement';

//buttons needs to be added here
export class TeamsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: TEAMS,
            newElement: ''
        };

        this.activeLinkStyle = {
            fontWeight: 'bold',
            color: '#FF2530'
        };
        this.deleteTeam = this.deleteTeam.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    deleteTeam(team, event) {
        event.stopPropagation();
        const teams = this.state.teams.slice();
        const index = teams.findIndex((el) => el.id === team.id);
        teams.splice(index, 1);
        this.setState({ teams: teams });

    }

    onInput(value) {
        this.setState({ newElement: value });
    }

    onSubmit() {
        const teams = this.state.teams.slice();
        const lastId = teams[teams.length - 1].id;
        teams.push({ id: lastId + 1, name: this.state.newElement });
        this.setState({teams: teams, newElement: ''});
    }

    render() {
        console.log('TeamsList');
        const rows = [];
        this.state.teams.forEach((team) => {
            if (team.name.indexOf(this.props.searchString) > -1) {
                rows.push(
                    <ListElement key={team.id}>
                        <NavLink to={`/teams/${team.id}`} activeStyle={this.activeLinkStyle}>
                            {team.name}
                        </NavLink>
                        <RedButton className='right' onClick={this.deleteTeam.bind(this, team)}>delete</RedButton>
                        <PrimaryButton className='right'>edit</PrimaryButton>
                    </ListElement>
                );
            }
        });
        return (
            <div>
                <List>{rows}</List>
                <AddElement onInput={this.onInput} onSubmit={this.onSubmit} element={this.state.newElement} />
            </div>
        );
    }


};

export default TeamsList;