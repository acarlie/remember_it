import React, { Component } from 'react';
import styles from './Counter.module.scss';

class Counter extends Component {
    render () {
        return (
            <div className={styles['counter']}>
                <span className="heading--5" aria-live="polite">
                    {this.props.title}: {this.props.count}
                </span>
            </div>
        );
    }
}

export default Counter;
