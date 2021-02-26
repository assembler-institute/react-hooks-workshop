import React, { Component } from "react";

class ComponentDidMountToHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("The counter component has been mounted");
  }

  render() {
    return (
      <div>
        <h1>hello-mundo</h1>
      </div>
    );
  }
}

export default ComponentDidMountToHooks;
