import React, {Component} from 'react';

class Timer extends Component {
    handleStartClick() {
        alert("starting..");
    }

    handleStopClick() {
        alert("stoping..");
    }

    render() {
        return (
            <div>
            <h1>0:00</h1>

            <button type="button" onClick={this.handleStartClick}>start</button>
            <button type="button" onClick={this.handleStopClick}>stop</button>
            </div>
        );
    }
}

export default Timer;
