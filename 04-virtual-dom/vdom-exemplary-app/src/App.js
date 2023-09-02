import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Virtual DOM Example</h1>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
