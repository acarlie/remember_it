import React, { Component } from 'react';
import styles from './Card.module.scss';
import Card from './Card';

class CardContainer extends Component {
    render () {
        const data = this.props.colors;

        return (
            <div className={styles['card__container']}>
                {
                    data.map((color, i) => {
                        return <Card key={i} color={color} />;
                    })
                }
            </div>
        );
    }
}

export default CardContainer;
