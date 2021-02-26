import React, { Component, useState } from "react";

class Child extends Component {
  componentWillUnmount() {
    console.log("Goodbye!");
  }

  render() {
    return <h1 className="h3">Hola</h1>;
  }
}

function ComponentWillUnmountToHooks() {
  const [mounted, setMounted] = useState(true);

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button
            onClick={() => setMounted((mounted) => !mounted)}
            className="btn btn-primary"
          >
            Toggle
          </button>
          {mounted ? (
            <code className="ml-3">isMounted</code>
          ) : (
            <code className="ml-3">notMounted</code>
          )}
        </div>
        <div className="col">
          <hr />
        </div>
        {mounted ? (
          <div className="col">
            <Child />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ComponentWillUnmountToHooks;
