import React from 'react';
import './App.css';

// Header component
function Header() {
  return (
    <header>
      <h1>Component Architecture Demo</h1>
    </header>
  );
}

// Content component
function Content() {
  return (
    <main>
      <p>This is the content of our React app.</p>
    </main>
  );
}

// App component (Parent component)
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
