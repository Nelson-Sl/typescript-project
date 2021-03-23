import './App.css';
import React, { Component } from 'react';

// interface addProps {
//     value1: number,
//     value2: number
// }
//
// interface paragraphProps {
//     content: string
// }
//
// interface stateProps extends addProps, paragraphProps{
// }

type addProps = {
    value1: number,
    value2: number
}

type paragraphProps = {
    content: string
}

type stateProps = addProps & paragraphProps;

class App extends Component {
  state: stateProps = {
      value1: 1,
      value2: 2,
      content: 'Hello, this is a calculator',
  }

    addValue = (numbers: addProps) => {
        return numbers.value1 + numbers.value2;
    }

    addParagraph = (paragraph: paragraphProps) => {
        return paragraph.content;
    }

  render () {
        const { value1, value2, content } = this.state;
        const values = {value1, value2};
        const paragraph = { content };
        return (
            <div className="app">
                <p>The first value is {value1}</p>
                <p>The second value is {value2}</p>
                <p>When they add together, it equals to {this.addValue(values)}</p>
                <p>{this.addParagraph(paragraph)}</p>
            </div>
        );
  }
}

export default App;
