import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './Jumbotron.module.scss';

class Jumbotron extends Component {
    render () {
        return (
            <section className={`text-center ${styles['jumbotron']}`}>
                <Container>
                    {this.props.children}
                </Container>
            </section>
        );
    }
}

export default Jumbotron;
