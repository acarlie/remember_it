import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './Header.module.scss';

class Header extends Component {
    render () {
        return (
            <header className={styles['header']}>
                <Container>
                    <h1 className='text-center'>Remember It</h1>
                </Container>
            </header>
        );
    }
}

export default Header;
