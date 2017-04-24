import React from 'react';
import { Route } from 'react-router-dom';

import Panel from './common/Panel';
import MemberDetails from './MemberDetails';
import MembersList from './MembersList';

export class RightPanel extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log('RightPanel render');
        return (
            <Panel width='70%'>
                    <Route path='/members/:id' render={(props) => <MemberDetails {...props}/>} />
                    <Route path='/teams/:id' render={(props) => <MembersList {...props}/>}  />
            </Panel>
        );
    }
};

export default RightPanel;