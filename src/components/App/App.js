import React, { Component } from 'react';

// Components
import Header from '../Header/Header';
import Container from '../Container/Container';
import Jumbotron from '../Jumbotron/Jumbotron';
import CardContainer from '../Card/Card-Container';
import Card from '../Card/Card';

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
            picked: [],
            topScore: 0
        };
    }

    shuffleArray = () => {
        const [...colors] = this.state.colors;
        for (let i = colors.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = colors[i];
            colors[i] = colors[j];
            colors[j] = temp;
        }
        this.setState({
            colors
        });
    }

    incrementScore = () => {
        const score = this.state.score + 1;
        this.setState({
            score
        });
    }

    setPicked = (id) => {
        const picked = this.state.picked.concat([id]);
        this.setState({
            picked
        });
    }

    setTopScore = (score) => {
        const topScore = score > this.state.topScore ? score : this.state.topScore;
        this.setState({
            topScore
        });
    }

    resetGame = () => {
        this.setState({
            picked: [],
            score: 0
        });
    }

    checkChoice = (event) => {
        const id = event.currentTarget.id;
        const isValid = this.state.picked.indexOf(id) === -1;
        if (isValid) {
            this.setPicked(id);
            this.incrementScore();
        } else {
            this.setTopScore(this.state.score);
            this.resetGame();
        }
        this.shuffleArray();
    }

    render () {
        return (
            <div className={styles['app']}>
                <Header />
                <main>
                    <Jumbotron>
                        Click on an image to earn points, but don't click on any more than once!
                        <p>Score: {this.state.score}</p>
                        <p>Top Score: {this.state.topScore}</p>
                    </Jumbotron>
                    <Container>
                        <CardContainer>
                            {
                                this.state.colors.map((color, i) => {
                                    return <Card key={i} color={color} checkChoice={this.checkChoice} />;
                                })
                            }
                        </CardContainer>
                    </Container>
                </main>
            </div>
        );
    }
}

export default App;
