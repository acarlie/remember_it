import React, { Component } from 'react';

// Components
import Header from '../Header/Header';
import Container from '../Container/Container';
import Jumbotron from '../Jumbotron/Jumbotron';
import CardContainer from '../Card/Card-Container';
import Card from '../Card/Card';
import Counter from '../Counter/Counter';
import Modal from '../Modal/Modal';

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
        this.modalRef = React.createRef();
    }

    componentDidMount () {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                this.modalRef.current.closeDialog();
            }
        });
    }

    shuffleArray = () => {
        const [...colors] = this.state.colors;
        for (let i = colors.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = colors[i];
            colors[i] = colors[j];
            colors[j] = temp;
        }

        const firstCard = document.querySelector('button[class*="card"]');
        firstCard.focus();

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
            this.shuffleArray();
            this.incrementScore();
            if (this.state.score === 11) {
                this.modalRef.current.openDialog(12, this.state.topScore);
            }
        } else {
            this.setTopScore(this.state.score);
            this.shuffleArray();
            this.modalRef.current.openDialog(this.state.score, this.state.topScore);
            this.resetGame();
        }
    }

    render () {
        return (
            <div className={styles['app']}>
                <Header>
                    <Counter count={this.state.score} title='Score' />
                    <Counter count={this.state.topScore} title='Top Score' />
                </Header>
                <main className={styles['main']}>
                    <Jumbotron dismissable={true} title='Click a button to begin!'>
                        Click on an button to earn points, but don't click the same button more than once!
                        <span className={styles['sr-only']}>Please note: buttons will shuffle after each round and focus will be returned to the first button. A round is won by selecting 12 different buttons in a row. A round is lost by clicking the same button twice within a round.</span>
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
                    <Modal ref={this.modalRef}/>
                </main>
            </div>
        );
    }
}

export default App;
