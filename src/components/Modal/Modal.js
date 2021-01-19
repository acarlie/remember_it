import React, { Component } from 'react';
import styles from './Modal.module.scss';
import Button from './../Button/Button.js';

class Modal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: false,
            score: 0,
            topScore: 0
        };
        this.closeRef = React.createRef();
    }

    openDialog = (score, topScore) => {
        this.setState({
            open: true,
            score: score,
            topScore: topScore
        }, () => {
           this.closeRef.current.setFocus();
            // this.closeRef.current.focus();
        });
        this.body = document.getElementsByTagName('body')[0];
        this.body.style.height = '100%';
        this.body.style.overflow = 'hidden';
    }

    closeDialog = () => {
        this.body.style = '';
        this.setState({
            open: false
        }, () => {
            // const firstCard = document.querySelector('button[class*="card"]');
            // firstCard.focus();
        });
    }

    closeHandler = (e) => {
        e.preventDefault();

        if (e.target.id !== 'dialog' || e.target.id === 'close') {
            this.closeDialog();
        }
    }

    render () {
        return (
            <div id="scrim" className={this.state.open ? styles['open'] + ' ' + styles['modal__scrim'] : styles['closed'] + ' ' + styles['modal__scrim']} onClick={(e) => this.closeHandler(e)}>
                <div id="dialog" role="dialog" aria-labelledby="title" aria-describedby="description" className={this.state.open ? styles['open'] + ' ' + styles['modal'] : styles['closed'] + ' ' + styles['modal']}>
                    <h2 id="title" className="heading--4">
                        { this.state.score === 12 &&
                            'You won!'
                        }
                        { this.state.score > this.state.topScore && this.state.score !== 12 &&
                            'Top score!'
                        }
                        { this.state.score < this.state.topScore &&
                          this.state.score < 12 &&
                            'Round over'
                        }
                        { this.state.score === this.state.topScore &&
                          this.state.score < 12 &&
                            'Round over'
                        }

                    </h2>
                    <p id="description" className={styles['modal__desc']}>
                        { this.state.score === 12 &&
                            'You scored the maximum of 12 points! '
                        }
                        { this.state.score > this.state.topScore &&
                                `Your score of ${this.state.score} beat your top score of ${this.state.topScore}.`
                        }
                        { this.state.score < this.state.topScore &&
                          this.state.score < 12 &&
                            `Your score was ${this.state.score}`
                        }
                        { this.state.score === this.state.topScore &&
                          this.state.score < 12 &&
                            `Your score was ${this.state.score}`
                        }
                    </p>
                    <div className={styles['modal__footer']}>
                        <Button id="close" onClick={(e) => this.closeHandler(e)} ref={this.closeRef} fullWidth>Dismiss</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Modal;
