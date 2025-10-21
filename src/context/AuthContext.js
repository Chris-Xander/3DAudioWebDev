import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { auth, onAuthStateChange, logOut } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const inactivityTimeoutRef = useRef(null);

  // Function to reset inactivity timer
  const resetInactivityTimer = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    if (currentUser) {
      inactivityTimeoutRef.current = setTimeout(async () => {
        console.log('User inactive for 2 minutes, logging out...');
        try {
          await logOut();
        } catch (error) {
          console.error('Error logging out due to inactivity:', error);
        }
      }, 2 * 60 * 1000); // 2 minutes
    }
  };

  // Set up event listeners for user activity
  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

    const handleActivity = () => {
      resetInactivityTimer();
    };

    if (currentUser) {
      events.forEach(event => {
        document.addEventListener(event, handleActivity, true);
      });
      resetInactivityTimer(); // Start timer on login
    }

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (!user) {
        // Clear timer on logout
        if (inactivityTimeoutRef.current) {
          clearTimeout(inactivityTimeoutRef.current);
        }
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
