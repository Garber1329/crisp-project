import "./App.css";
import { lazy } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
const AddAddress = lazy(() => import('./pages/AddAddress/AddAddress.jsx'));
const MyOrders = lazy(() => import('./pages/MyOrders/MyOrders.jsx'));
import HomePage from './pages/HomePage/HomePage.jsx';
const DashbordPage = lazy(() => import('./pages/DashbordPage/DashbordPage.jsx'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage.jsx'));
const Register = lazy(() => import('./Components/Register/Register.jsx'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage.jsx'));
const LoginMain = lazy(() => import('./Components/LoginPage/LoginPageContent.jsx'));
const ProductCatalog = lazy(() => import('./pages/ProductCatalog/ProductCatalog.jsx'));
import { LoginContext } from './Context/LoginContext.jsx';
const Blog = lazy(() => import('./Components/Blog/Blog.jsx'));
import Layout from './Components/Layout.jsx';
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage.jsx'));
const SalePage = lazy(() => import('./pages/SalePge/SalePage.jsx'));
const CartPage2 = lazy(() => import('./pages/CartPage/CartPage2.jsx'));
const BlogPages = lazy(() => import('./pages/BlogPages/BlogPage.jsx'));
const AllBlogPages  = lazy(() => import('./pages/AllBlogPages/AllBlogPages.jsx'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginMain />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/dashboard" element={<DashbordPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/sale' element={<SalePage/>}/>
          <Route path='/cart2' element={<CartPage2/>}/>
          <Route path='/blog' element={<AllBlogPages/>}/>
          <Route path='/catalog' element={<ProductCatalog/>}/>
          <Route path='/blogPage' element={<BlogPages/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
