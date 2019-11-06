import React, { Component } from 'react';
import CardContainer from '../Card/Card-Container';

// Data
import colors from '../../assets/data/colors.js';

// Styles
import '../../assets/css/reset.min.css';
import '../../assets/css/variables.css';
import '../../assets/css/typography.css';
import styles from './App.module.scss';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            colors,
            score: 0,
            topScore: 0
        };
    }

    render () {
        return (
            <div className={styles['app']}>
                <div className={styles['container']}>
                    <header className={styles['header']}>
                        <h1 className='text-center'>Remember It</h1>
                    </header>
                    <main>
                        <section className='text-center'>
                            Click on an image to earn points, but don't click on any more than once!
                        </section>
                        <CardContainer colors={this.state.colors} />

                    </main>
                </div>
            </div>
        );
    }
}

export default App;
