import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (e) => {
    setExpression(expression + e.target.name);
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" value={expression} readOnly />
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button name="(" onClick={handleClick}>
          (
        </button>
        <button name=")" onClick={handleClick}>
          )
        </button>
        <button name="/" onClick={handleClick}>
          ÷
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          ×
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="equal" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
