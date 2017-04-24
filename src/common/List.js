import React from 'react';

export const List = (props) => {
    const styles = {
        background: '#fff',
        position: 'relative',
        margin: '10px 0px',
        listStyleType: 'none',
        padding: '0'
    };

    return (
        <ul style={styles} {...props}>{props.children}</ul>
    );
};

export default List;