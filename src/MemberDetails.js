import React from 'react';
import {MEMBERS} from './common/data-mock';

export const MemberDetails = ({match}) => {
    const id = match.params.id;
    const details = MEMBERS.find((element) => element.id === parseInt(id));
    return (
        <div>
        {details ?
            (<h1>Details for {details.name}</h1>)
        :
            (<p>Member not found</p>)
        }
        </div>
    );
};

export default MemberDetails;