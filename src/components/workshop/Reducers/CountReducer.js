import React, { useState } from "react";

function CountReducer() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  function decrementCount() {
    setCount((count) => count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <main className="container mt-5">
      <section className="row-cols-1">
        <div className="col mb-2">
          <h1>Current count: {count}</h1>
        </div>
        <div className="col mb-2">
          <hr />
        </div>
        <div className="col mb-2">
          <button className="btn btn-primary" onClick={incrementCount}>
            Increment
          </button>
          <button
            className="btn btn-secondary mr-3 ml-3"
            onClick={decrementCount}
          >
            Decrement
          </button>
          <button className="btn btn-ghost" onClick={resetCount}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default CountReducer;
