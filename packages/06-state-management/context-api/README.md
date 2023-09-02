# Context API Example

This is a simple React application that demonstrates the usage of the Context API.

## Context API Overview

The Context API is a feature in React that allows you to manage global state in your application without the need to pass props down through multiple levels of components. It provides a way to share data between components at different levels of the component tree.

## How it Works

1. In this example, we create a context using `React.createContext()` in `App.js`.

2. We then create a provider component, `MyProvider`, which wraps the entire application. Inside this provider, we define the initial state and provide it through the `value` prop.

3. In `App.js`, we use the `MyProvider` component to wrap our application. This makes the context and its data available to all components within the provider.

4. We create a consumer component, `MyConsumer`, to access the data from the context. In this case, we are displaying the `message` from the context in our component.

## Running the App

To run the app, follow these steps:

1. Navigate to the project directory.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Conclusion

The Context API is a powerful tool for managing global state in your React applications. It allows you to avoid prop drilling and simplifies the sharing of data between components. This example provides a basic illustration of how to set up and use the Context API in your projects.