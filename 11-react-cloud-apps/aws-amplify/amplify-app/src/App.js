import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'; // Optional: Import authentication UI components

import awsconfig from './aws-exports'; // Your AWS Amplify configuration file

Amplify.configure(awsconfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Use the Auth module to check if a user is signed in
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch(() => setUser(null));
  }, []);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        {user ? (
          <div>
            <p>Hello, {user.attributes.email}</p>
            <button onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <p>Please sign in to access this app.</p>
        )}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
