import React, { useState, useEffect, Component } from 'react';

// Using React Hooks
function HookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Hooks Counter: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Hooks Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Using Class Component with Lifecycle Methods
class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `Class Counter: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Class Counter: ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <HookCounter />
      <ClassCounter />
    </div>
  );
}

export default App;
