import React from 'react';
import PrimaryButton from './common/PrimaryButton';

export class AddElement extends React.Component {
    constructor(props) {
        super(props);
        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInput(e) {
        this.props.onInput(e.target.value);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' value={this.props.element} onChange={this.onInput} placeholder=''/>
                <PrimaryButton type='submit'>add</PrimaryButton>
            </form>
        );
    }
}

export default AddElement;