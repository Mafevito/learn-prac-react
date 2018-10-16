import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //secondsElapsed
            timer: 25 * 60,
            started: false
        }

        this.interval = null;

        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    
    getMinutes() {
        return Math.floor(this.state.timer / 60);
    }

    getSeconds() {
        return('0' + this.state.timer % 60).slice(-2);
    }

    handleStartClick() {
        //alert("starting..");

        if(this.state.started === false) {
            this.interval = setInterval(() => {
                this.setState((prevState) => {
                    return {
                        timer: prevState.timer - 1
                    }
                })
            }, 1000)

            this.setState({
                started: true
            })
        } 
    }

    handleStopClick() {
        //alert("stoping..");

        if(this.state.started === true) {
            clearInterval(this.interval)
            this.setState({
                started: false
            })
        }
    }

    handleResetClick() {
        this.setState({
            timer: 25 * 60,
            started: false
        })
    }

    render() {
        return (
            <div>
            <h1>{this.getMinutes()}:{this.getSeconds()}</h1>

            <button type="button" onClick={this.handleStartClick}>start</button>
            <button type="button" onClick={this.handleStopClick}>stop</button>
            <button type="button" onClick={this.handleResetClick}>reset</button>

            </div>
        );
    }
}

export default Timer;
