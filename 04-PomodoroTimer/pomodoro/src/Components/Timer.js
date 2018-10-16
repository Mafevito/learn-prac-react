import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            secondsElapsed: 65
        }

        this.handleStartClick = this.handleStartClick.bind(this);
    }
    
    getMinutes() {
        return Math.floor(this.state.secondsElapsed / 60);
    }

    getSeconds() {
        return('0' + this.state.secondsElapsed % 60).slice(-2);
    }

    handleStartClick() {
        //alert("starting..");

        setInterval(function() {
            this.setState((prevState) => {
                return {
                    secondsElapsed: prevState.secondsElapsed + 1
                }
            })
        }, 1000)
    }

    handleStopClick() {
        alert("stoping..");
    }

    render() {
        return (
            <div>
            <h1>{this.getMinutes()}:{this.getSeconds()}</h1>

            <button type="button" onClick={this.handleStartClick}>start</button>
            <button type="button" onClick={this.handleStopClick}>stop</button>
            </div>
        );
    }
}

export default Timer;
