import React from 'react';
export const PrimaryButton = ({borderColor = '#34495e', ...props}) => {
    const styles = {
        background: '#fff',
        border: '1px solid',
        borderColor,
        color: '#34495e',
        margin: '1px'
    };

    return (
        <button style={styles} {...props}>
            {props.children}
        </button>
    );
};

export default PrimaryButton;