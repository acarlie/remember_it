import React, { Component } from 'react';
import styles from './Button.module.scss';

class Button extends Component {
     constructor (props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    setFocus = () => {
        this.buttonRef.current.focus();
    }

    render () {
        return (
            <button id={this.props.id ? this.props.id : null} ref={this.buttonRef} className={`${styles['button']} ${this.props.fullWidth ? styles['button--full-width'] : ''}`} onClick={this.props.handler}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
