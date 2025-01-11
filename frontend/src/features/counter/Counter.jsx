import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex gap-4 p-4 bg-white rounded shadow-md">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          aria-label="Increment Value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-xl font-bold text-gray-800">{count}</span>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          aria-label="Decrement Value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
