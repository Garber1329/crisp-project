import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import DashbordPage from './pages/DashbordPage/DashbordPage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'

function App() {

  return (
    <>
     <RegisterPage/>
    <HomePage />
    <DashbordPage />
    <CartPage/>
    <ProductPage/>
    </>
  )
}

export default App
