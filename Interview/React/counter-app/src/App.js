import React, { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + step);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (event) => {
    const newStep = Number(event.target.value);
    setStep(newStep);
  };

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <p className="count">Count: {count}</p>
      <div className="controls">
        <label htmlFor="step-input">Step:</label>
        <input
          id="step-input"
          type="number"
          value={step}
          onChange={handleStepChange}
        />
      </div>
      <div className="buttons">
        <button className="increment-button" onClick={handleIncrement}>
          +
        </button>
        <button className="decrement-button" onClick={handleDecrement}>
          -
        </button>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default CounterApp;
