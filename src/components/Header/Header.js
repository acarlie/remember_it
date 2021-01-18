import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './Header.module.scss';

class Header extends Component {
    render () {
        return (
            <header className={styles['header']}>
                <Container>
                    <div className={styles['header__inner']}>
                        <div className={styles['header__logo']}>
                            <h1 className="heading--1">Remember It</h1>
                        </div>
                        <div className={styles['header__content']}>
                            {this.props.children}
                        </div>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;
