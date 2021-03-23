import './App.css';
import React, { Component } from 'react';

interface stateProps {
    value1: number,
    value2: number
}

class App extends Component {
  state: stateProps = {
      value1: 1,
      value2: 2,
  }

  addValue(value1: number, value2: number) {
    return value1 + value2;
  }

  render () {
        const { value1, value2 } = this.state;
        return (
            <div className="app">
                <p>The first value is {value1}</p>
                <p>The second value is {value2}</p>
                <p>When they add together, it equals to {this.addValue(value1, value2)}</p>
            </div>
        );
  }
}

export default App;
