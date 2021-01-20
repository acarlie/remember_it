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

    componentDidMount () {
        this.body = document.getElementsByTagName('body')[0];
    }

    openDialog = (score, topScore) => {
        this.setState({
            open: true,
            score: score,
            topScore: topScore
        }, () => {
            this.closeRef.current.setFocus();
            this.setBodyStyle(true);
        });
    }

    closeDialog = () => {
        this.setState({
            open: false
        }, () => {
            this.props.reset();
            this.setBodyStyle(false);
        });
    }

    closeHandler = (e) => {
        e.preventDefault();

        if (e.target.id === 'scrim' || e.target.id === 'close') {
            this.closeDialog();
        }
    }

    setBodyStyle = (isOpen) => {
        if (isOpen) {
            this.body.style.height = '100%';
            this.body.style.overflow = 'hidden';
        } else {
            this.body.style = '';
        }
    }

    render () {
        return (
            <div id="scrim" className={this.state.open ? styles['modal--open'] + ' ' + styles['modal__scrim'] : styles['modal--closed'] + ' ' + styles['modal__scrim']} onClick={(e) => this.closeHandler(e)}>
                <div id="dialog" role="dialog" aria-labelledby="title" aria-describedby="description" className={this.state.open ? styles['modal--open'] + ' ' + styles['modal'] : styles['modal--closed'] + ' ' + styles['modal']}>
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
                        <Button id="close" onClick={(e) => this.closeHandler(e)} ref={this.closeRef} fullWidth>Play again</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Modal;
