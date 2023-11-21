"use client";

import { useEffect, useState } from 'react';
import { useUserAuth } from "./utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : user ? ( // Check if user is not null before rendering user details
        <p>
          Welcome, {user.displayName} ({user.email})
        </p>
      ) : (
        <p>Welcome, Guest!</p> // Provide an alternative UI for when user is null
      )}
      <button onClick={handleSignIn}>Sign in with GitHub</button>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Page;
