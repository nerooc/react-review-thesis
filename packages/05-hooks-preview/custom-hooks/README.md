# Custom Hook Example

This React application demonstrates the usage of custom hooks in React. In this example, we create a custom hook called `useCounter` to manage a simple counter state.

## Custom Hooks in React

Custom hooks are JavaScript functions that allow you to reuse stateful logic across multiple React components. They follow a naming convention of starting with the word `use`, which tells React that it's a hook. Custom hooks are a powerful way to abstract and share complex logic, making your components more concise and maintainable.

## How the `useCounter` Custom Hook Works

The `useCounter` custom hook manages a counter state and provides functions to increment and decrement it. Here's how it works:

1. Import the `useCounter` hook into your component:

   ```javascript
   import useCounter from './useCounter';
   ```

2. Initialize the counter state by calling the `useCounter` hook and passing an initial value as an argument:

   ```javascript
   const { count, increment, decrement } = useCounter(0);
   ```

   In this example, we start the counter at `0`.

3. Use the `count` variable to display the current count in your component.

4. Use the `increment` and `decrement` functions to update the count state. When these functions are called, they will trigger a re-render of your component with the updated count.

## Running the App

To run this example app locally, follow these steps:


1. Navigate to the project directory:

   ```
   cd counter-hook-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

   Your app will be available at `http://localhost:3000`, and you can see the custom hook in action.

Feel free to explore the code in this repository to learn more about how custom hooks work and how they can enhance code reusability in your React applications.