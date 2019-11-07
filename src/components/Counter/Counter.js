import React, { Component } from 'react';
import styles from './Counter.module.scss';

class Counter extends Component {
    render () {
        return (
            <div className={styles['counter']}>
                <h5>
                    {this.props.title}: {this.props.count}
                </h5>
            </div>
        );
    }
}

export default Counter;
