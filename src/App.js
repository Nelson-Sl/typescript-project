import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      goods: [
        {
          title: "java",
          price: 1000
        },
        {
          title: "php",
          price: 500
        }, {
          title: "python",
          price: 800
        }
      ]

    }
  }

  changeVal(ev) {
    this.setState({
      ...this.state,
      val: ev.target.value
    });
  }

  addGood(name) {
    const good = {
      title: name,
      price: 666
    }
    this.setState({
      goods: [
        ...this.state.goods,
        good
      ]
    });
  }

  render () {
    return (
        <div className="app">
          <input type='text' value={this.state.val} onChange={(event) => this.changeVal(event)}></input>
          <button onClick={(ev) => this.addGood(this.state.val)}>submit</button>
          <ul>
            {
              this.state.goods.map(item => {
                return (<li>{item.title}</li>)
              })
            }
          </ul>
        </div>
    );
  }
}

export default App;
