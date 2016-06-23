import React from 'react'
import ReactDOM from 'react-dom'

// one of the reasons to use webpack is the react-hot-loader plugin allows to update content without changing state.
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
