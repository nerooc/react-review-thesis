import React, { useState, useEffect, useContext, useRef } from 'react';

const App = () => {
  // useState hook for managing state
  const [count, setCount] = useState(0);

  // useEffect hook for handling side effects
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useContext hook for accessing context
  const ThemeContext = React.createContext('light');
  const theme = useContext(ThemeContext);

  // useRef hook for accessing and modifying DOM elements
  const inputRef = useRef(null);

  // Custom hook (you can create your own custom hooks)
  const useCustomHook = () => {
    // ... custom logic
    return 'someValue';
  };
  const customValue = useCustomHook();

  return (
    <div>
      <h1>React Hooks Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>Theme: {theme}</p>

      <input ref={inputRef} type="text" />

      <p>Custom Value: {customValue}</p>
    </div>
  );
};

export default App;
