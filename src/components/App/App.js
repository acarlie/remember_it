import React, { Component } from 'react';
import CardContainer from '../Card/Card-Container';

// Data
import colors from '../../assets/data/colors.js';

// Styles
import '../../assets/css/reset.min.css';
import '../../assets/css/variables.css';
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
                    <header className="">
                        <h1>Remember It</h1>
                    </header>
                    <main>
                        <CardContainer colors={this.state.colors} />

                    </main>
                </div>
            </div>
        );
    }
}

export default App;
