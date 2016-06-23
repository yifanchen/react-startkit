import React from 'react'
import ReactDOM from 'react-dom'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { count:0 };
  }

  increment(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="counter">
        <p>Count: { this.state.count }</p>
        <button onClick={ () => this.increment() }>Update</button>
      </div>
    )
  }
}
