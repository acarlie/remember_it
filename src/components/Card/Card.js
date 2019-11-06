import React, { Component } from 'react';
import styles from './Card.module.scss';

class Card extends Component {
    render () {
        const { color1, color2, icon } = this.props.color;
        const background = { background: `linear-gradient(to right, ${color1}, ${color2})` };

        return (
            <div className={styles['card']} style={background}>
                <i className='material-icons'>{icon}</i>
            </div>
        );
    }
}

export default Card;
