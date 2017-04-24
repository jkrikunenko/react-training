import React from 'react';

export const ListElement = (props) => {
    const styles = {
        padding: '10px 10px'
    };
    console.log('ListElement');
    return (
        <li style={styles} {...props}>{props.children}</li>
    );
};

export default ListElement;