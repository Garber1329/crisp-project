import React, { useState } from 'react';
import axios from 'axios';
import { LoginContext } from './LoginContext';

export default function LoginProvider({ children }) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginPage, setLoginPage] = useState(false)
  const [registerPage, setRegisterPage] = useState(false)
  const [allProject, setAllProject] = useState(true)

  const login = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://fakestoreapiserver.reactbd.org/api/users/1');
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

  const loginPages = () => {
    setLoginPage(true)
    setRegisterPage(false)
    setAllProject(false)
  }

  const registerPages = () => {
    setLoginPage(false)
    setRegisterPage(true)
    setAllProject(false)
  }

  const allProjects = () => {
    setLoginPage(false)
    setRegisterPage(false)
    setAllProject(true)
  }

  return (
    <LoginContext.Provider value={{ isSignIn, user, isLoading, error, login, logout, loginPages, loginPage, registerPages, registerPage, allProjects, allProject }}>
      {children}
    </LoginContext.Provider>
  );
};