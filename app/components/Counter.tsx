"use client";
import { useState } from "react";
import style from "./counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count >= 0 && count < 20) {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    } else {
      return count;
    }
  }

  function decrement() {
    if (count > 0) {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    } else {
      return count;
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className={style.counterContainer}>
      <button onClick={decrement}>-</button>
      <p className={style.counterNum}>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
