import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import { DashbordPage } from './pages/DashbordPage/DashbordPage'
import { AddAddress } from './pages/AddAddress/AddAddress.jsx'
import { MyOrders } from './pages/MyOrders/MyOrders.jsx'


function App() {


  return (
    <>
    {/* <HomePage /> */}
    <Routes>
      

      <Route path='/dashbord/:id' elemebt={<DashbordPage />}>
      <Route path='addaddres' element={<AddAddress />} />
      <Route path='myorders' element={<MyOrders />} />
        <Route />
      </Route>
    </Routes>
    </>
  )
}

export default App
