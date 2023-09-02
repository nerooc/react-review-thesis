import React, { useState } from 'react';

function App() {
  // Define a piece of local state called "count" and its setter function.
  const [count, setCount] = useState(0);

  // Event handler to increment the count.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the count.
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Component Local State Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
