import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import DashbordPage from './pages/DashbordPage/DashbordPage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import LoginMain from '/src/Components/LoginPage/LoginPageContent.jsx'
import { LoginContext } from "./Context/LoginContext.jsx";
import { useContext } from "react";

function App() {

  const { loginPage, registerPage, allProject } = useContext(LoginContext)
  // console.log();


  return (
    <>
      {registerPage && <RegisterPage />}
      {loginPage && <LoginMain />}
      {allProject && <div>
        <HomePage />
        <DashbordPage />
        <CartPage />
        <ProductPage />
      </div>}
    </>
  )
}

export default App
