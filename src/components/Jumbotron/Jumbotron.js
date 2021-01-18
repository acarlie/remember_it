import React, { Component } from 'react';
// import Container from '../Container/Container';
import Button from '../Button/Button';
import styles from './Jumbotron.module.scss';

class Jumbotron extends Component {
    state = {
        isDismissed: false
    }

    dismissHandler = () => {
        this.setState({
            isDismissed: true
        });
    }

    render () {
        return (
            <section className={`text-center ${styles['jumbotron']} ${this.state.isDismissed ? styles['hidden'] : styles['visible']}`} aria-hidden={this.state.isDismissed ? 'true' : null}>
                <div className={styles['jumbotron__content']}>
                    <h2 className="heading--4">{this.props.title}</h2>
                    <p>{this.props.children}</p>
                    <p>{this.props.dismissable && <Button handler={this.dismissHandler}>Dismiss</Button>}</p>
                </div>
            </section>
        );
    }
}

export default Jumbotron;
