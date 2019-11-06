import React, { Component } from 'react';

// Components
import Header from '../Header/Header';
import Container from '../Container/Container';
import Jumbotron from '../Jumbotron/Jumbotron';
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
                <Header />
                <main>
                    <Jumbotron>
                        Click on an image to earn points, but don't click on any more than once!
                    </Jumbotron>
                    <Container>
                        <CardContainer colors={this.state.colors} />
                    </Container>
                </main>
            </div>
        );
    }
}

export default App;
