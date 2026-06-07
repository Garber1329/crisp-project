import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import { DashbordPage } from './pages/DashbordPage/DashbordPage'
import { AddAddress } from './pages/AddAddress/AddAddress.jsx'
import { MyOrders } from './pages/MyOrders/MyOrders.jsx'

import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
// import DashbordPage from "./pages/DashbordPage/DashbordPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import LoginMain from "/src/Components/LoginPage/LoginPageContent.jsx";
import { LoginContext } from "./Context/LoginContext.jsx";
import ProductCatalog from "./pages/ProductCatalog/ProductCatalog.jsx";

function App() {
  return (
    <>
    {/* <HomePage /> */}
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashbordPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/productCatalog" element={<ProductCatalog />} />
        <Route path='/dashbord' element={<DashbordPage />} />
        <Route path='/addaddres' element={<AddAddress />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
      {/* <RegisterPage />
      <LoginMain />

      <HomePage />
      <DashbordPage />
      <CartPage />
      <ProductPage /> */}
    </>
  );
}

export default App;
