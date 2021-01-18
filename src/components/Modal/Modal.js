import React, { Component } from 'react';
import styles from './Modal.module.scss';

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
            this.closeRef.current.focus();
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
            const firstCard = document.querySelector('button[class*="card"]');
            firstCard.focus();
        });
    }

    closeHandler = (e) => {
        e.preventDefault();

        if (e.target.id === 'scrim' || e.target.id === 'close' || e.target.id === 'close-inner') {
            this.closeDialog();
        }
    }

    render () {
        return (
            <div id="scrim" className={this.state.open ? styles['open'] + ' ' + styles['scrim'] : styles['closed'] + ' ' + styles['scrim']} onClick={(e) => this.closeHandler(e)}>
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
                    <p id="description">
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
                    <button id="close" className={styles['close']} aria-label="close dialog" ref={this.closeRef} onClick={(e) => this.closeHandler(e)}>
                        <span id="close-inner" onClick={(e) => this.closeHandler(e)}>×</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;
