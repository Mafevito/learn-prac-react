import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrementCount() {
        this.setState((prevState, props) => {
            return {
                count: prevState.count -1
            }
        })
    }

    resetCount() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div class="content">
            <div className="count-button">
             <h4 className="count-number-total">{this.state.count}</h4>
               <button className="count-more" onClick= {this.incrementCount}>+</button>
               <button className="reset" onClick= {this.resetCount}>reset</button>
               <button className="count-less" onClick= {this.decrementCount}>-</button>
              </div>
            </div>
        )
    }
}

export default Clicker;