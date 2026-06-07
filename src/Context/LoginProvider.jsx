import React, { useState } from 'react';
import axios from 'axios';
import { LoginContext } from './LoginContext';

export default function LoginProvider({ children }) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://crisp-project-server.onrender.com/users/1');
      setUser(response.data);
      setIsSignIn(true);
    } catch (err) {
      setError(err.message);
      console.error('Помилка при завантаженні даних користувача:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsSignIn(false);
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ isSignIn, user, isLoading, error, login, logout}}>
      {children}
    </LoginContext.Provider>
  );
};