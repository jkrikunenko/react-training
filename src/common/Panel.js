import React from 'react';

export const Panel = (props) => {
    const styles = {
        height: '90%',
        display: 'inline-block',
        background: '#fff',
        margin: '50px',
        padding: '5px',
        width: props.width || '100%'
    };

    return (
        <div className='panel' style={styles} {...props}>
            {props.children}
        </div>
    );
};

export default Panel;