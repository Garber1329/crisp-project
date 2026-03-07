import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import DashbordPage from './pages/DashbordPage/DashbordPage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import Coments from  './Components/Coments/Coments.jsx'

function App() {

  return (
    <>
     <RegisterPage/>
    <HomePage />
    <DashbordPage />
    <CartPage/>
    <Coments/>
    </>
  )
}

export default App
