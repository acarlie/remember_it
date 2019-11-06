import React, { Component } from 'react';
import styles from './Card.module.scss';

class Card extends Component {
    render () {
        const { color1, color2, icon } = this.props.color;
        const background = { background: `linear-gradient(to right, ${color1}, ${color2})` };
        const shadow = { textShadow: `2px 2px 10px ${color2}` };

        return (
            <div className={styles['card']} style={background}>
                <i className={`material-icons ${styles['card__icon']}`} style={shadow}>{icon}</i>
            </div>
        );
    }
}

export default Card;
