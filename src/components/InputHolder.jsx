import React from 'react';

import './InputHolder.css'

class InputHolder extends React.Component {
    render() {
        return(
            <div class="input_container">
                <label for={this.props.name}>{this.props.placeholder}</label>
                <input type={this.props.type} name={this.props.name} required />
            </div>
        )
    }
}

export default InputHolder;
