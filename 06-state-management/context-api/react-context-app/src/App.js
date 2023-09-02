import React from 'react';
import './App.css';

// Step 1: Create a context
const MyContext = React.createContext();

// Step 2: Create a provider component
class MyProvider extends React.Component {
  state = {
    message: 'Hello from Context API!',
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

// Step 3: Create consumer component
const MyConsumer = MyContext.Consumer;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Context API Example</h1>
        <MyProvider>
          <MyConsumer>
            {(context) => (
              <div>
                <p>{context.message}</p>
              </div>
            )}
          </MyConsumer>
        </MyProvider>
      </div>
    );
  }
}

export default App
