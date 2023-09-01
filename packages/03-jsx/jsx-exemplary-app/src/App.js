import React from 'react';
import './App.css';

// JSX Element
const element = <h1>Hello, JSX!</h1>;

function App() {
  return (
    <div className="App"> {/* Apply a CSS class */}
      {/* JSX can be used directly in the render method */}
      {element}
      
      {/* JSX allows you to embed expressions */}
      <p>2 + 2 = {2 + 2}</p>
      
      {/* You can use variables in JSX */}
      {renderGreeting("John")}
    </div>
  );
}

function renderGreeting(name) {
  return <p>Hello, {name}!</p>;
}

export default App;
