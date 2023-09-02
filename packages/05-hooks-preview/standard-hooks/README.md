# React Hooks Example

This is a simple React app that demonstrates the use of several standard React hooks. React hooks provide a way to add state and other React features to functional components.

## Hooks Presented

### 1. useState Hook

The `useState` hook allows us to add state management to functional components. In this app, we use it to manage the "count" state, which increases when you click the "Increment" button.

### 2. useEffect Hook

The `useEffect` hook is used for handling side effects in functional components. In this app, we utilize it to update the document title whenever the "count" state changes.

### 3. useContext Hook

The `useContext` hook provides a way to access context in functional components. In this app, we demonstrate its usage by fetching the current theme value from a context provider.

### 4. useRef Hook

The `useRef` hook allows us to access and modify DOM elements in functional components. In this app, we use it to create a reference to the input element.

### 5. Custom Hook

We've also showcased the concept of creating custom hooks. In this app, we have a custom hook named `useCustomHook`. Custom hooks are a way to reuse stateful logic across different components.

Feel free to explore the code to see how each hook is implemented and used within the app.

## Running the App

To run the app locally, follow these steps:

1. Navigate to the project directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open your web browser and go to `http://localhost:3000`.