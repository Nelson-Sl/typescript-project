import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 1,
      value2: 2,
    }
  }

  addValue(value1, value2) {
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
