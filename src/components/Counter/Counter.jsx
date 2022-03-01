import { useEffect, useReducer, useState } from "react";
import "./Counter.css";

// useReducer(reducer , initialState)
//newState = reducer(currentState , action)



const Counter = () => {
  const [digit, setDigit] = useState(0);
  const [toggle, settoggle] = useState(true);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    let id;
    if (toggle) {
      id = setInterval(() => {
        setDigit((digit) => digit + 1);
      }, 1000);
    } else {
      console.log(toggle);
      id = setInterval(() => {
        setDigit((digit) => digit - 1);
      }, 1000);
    }
    setIntervalId(id);
    return () => clearInterval(id);
  }, [toggle]);

  const handleReset = () => {
    setDigit(0);
    clearInterval(intervalId);
  };

  return (
    <div>
      <div>{digit}</div>
      <button
        onClick={() => settoggle((prevToggle) => !prevToggle)}
        className="button"
      >
        toggle
      </button>

      <button onClick={handleReset} className="button">
        Reset
      </button>
    </div>
  );
};

export default Counter;
