import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginProvider from './Context/LoginProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <BrowserRouter basename="/crisp-project/">
        <App />
      </BrowserRouter>
    </LoginProvider>
  </StrictMode>,
);
