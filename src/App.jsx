import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import DashbordPage from './pages/DashbordPage/DashbordPage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import LoginMain from '/src/Components/LoginPage/LoginPageContent.jsx'
import { LoginContext } from "./Context/LoginContext.jsx";
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashbordPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginMain />} />
        </Routes>
      {/* <RegisterPage />
      <LoginMain />

      <HomePage />
      <DashbordPage />
      <CartPage />
      <ProductPage /> */}

    </>
  )
}

export default App
