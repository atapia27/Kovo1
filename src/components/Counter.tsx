import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl mb-4">Current Count: {count}</p>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;