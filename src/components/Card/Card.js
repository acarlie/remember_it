import React, { Component } from 'react';
import styles from './Card.module.scss';

class Card extends Component {
    render () {
        const { id, color1, color2, icon, name } = this.props.color;
        const background = { background: `linear-gradient(to right, ${color1}, ${color2})` };
        const shadow = { textShadow: `2px 2px 10px ${color2}` };

        return (
            <button id={id} className={styles['card']} style={background} onClick={this.props.checkChoice} aria-label={name}>
                <i className={`material-icons ${styles['card__icon']}`} style={shadow} aria-hidden="true">{icon}</i>
            </button>
        );
    }
}

export default Card;
