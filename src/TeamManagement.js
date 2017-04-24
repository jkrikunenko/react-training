import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';

export const TeamManagement = () => {
    return (
        <Router>
            <div className='panels-container'>
                <LeftPanel/>
                <RightPanel/>
            </div>
        </Router>
    );
};