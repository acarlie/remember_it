import React, { Component } from 'react';
import styles from './Card.module.scss';

class CardContainer extends Component {
    render () {

        return (
            <div className={styles['card__container']}>
                {this.props.children}
            </div>
        );
    }
}

export default CardContainer;
