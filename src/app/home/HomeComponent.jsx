import React from "react";

import CentralDisplayContainer from "./CentralDisplayContainer";

function HomeComponent({ onIncrementClick, onDecrementClick, currentCount }) {
  return (
    <div>
      <p>Current Count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <CentralDisplayContainer />
    </div>
  );
}
export default HomeComponent;
