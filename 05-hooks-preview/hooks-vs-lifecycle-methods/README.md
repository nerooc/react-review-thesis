# React App: Hooks vs. Lifecycle Methods

This React app demonstrates the difference between using React hooks and class component lifecycle methods for managing state and side effects. It includes two counters, one implemented with hooks and the other with class component lifecycle methods.

## App Overview

### Hooks Counter
- Implemented using React hooks (`useState` and `useEffect`).
- State and side effects are managed in a functional component.
- Updates the document title to reflect the current count.
- Simplicity and readability are key advantages.

### Class Counter
- Implemented as a class component with lifecycle methods (`componentDidMount` and `componentDidUpdate`).
- State and side effects are managed in a class-based component.
- Updates the document title to reflect the current count.
- Traditional approach, common in older React code

## Running the App

To run this example app locally, follow these steps:


1. Navigate to the project directory:

   ```
   cd counter-comparison-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

   Your app will be available at `http://localhost:3000`, and you can see the comparison in action.

Feel free to explore the code in this repository to learn more about how hooks and lifecycle mthods work.