import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import AddAddress from './pages/AddAddress/AddAddress.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx'

import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DashbordPage from "./pages/DashbordPage/DashbordPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import Register from "./Components/Register/Register.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import LoginMain from "./Components/LoginPage/LoginPageContent.jsx";
import { LoginContext } from "./Context/LoginContext.jsx";

import ProductCatalog from "./pages/ProductCatalog/ProductCatalog.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Layout from './Components/Layout.jsx'
import ShopPage from './pages/ShopPage/ShopPage.jsx'
import SalePage from './pages/SalePge/SalePage.jsx'
import CartPage2 from './pages/CartPage/CartPage2.jsx'
import BlogPages from './pages/BlogPages/BlogPage.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<LoginMain />} />
          <Route path="/" element={<HomePage />} />
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path="/dashboard" element={<DashbordPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/sale' element={<SalePage/>}/>
          <Route path='/cart2' element={<CartPage2/>}/>
          <Route path='/blog' element={<BlogPages/>}/>
          <Route path='/catalog' element={<ProductCatalog/>}/>
        </Route>
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
