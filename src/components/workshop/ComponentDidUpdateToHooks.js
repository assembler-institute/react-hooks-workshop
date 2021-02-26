import React, { Component } from "react";

class ComponentDidUpdateToHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  componentDidUpdate() {
    console.log("The counter component has been updated");
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Current count: {this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default ComponentDidUpdateToHooks;
