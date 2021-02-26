import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Current count: {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default Counter;
