
import React from 'react'
import OlxTopBar from './Components/OlxTopBar'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import ProductsDetails from './pages/ProductsDetails'
import SellProducts from './pages/SellProducts'
import UserOnly from './pages/UserOnly'
import SingUp from './pages/SingUp'
import BuyProduct from './pages/BuyProduct'
import { Tost } from './pages/Tost'

export default function App() {
  return <>
  <div>

    
  </div>
    {/* <BrowserRouter>
      <OlxTopBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Tost' element={<Tost/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/SingUp' element={<SingUp />} />
        <Route path='/ProductsDetails/:id' element={<UserOnly  element={<ProductsDetails/>}/>} />
        <Route path='/SellProducts' element={<UserOnly element={<SellProducts/>} />} />
        <Route path='/BuyProduct' element={<UserOnly element={<BuyProduct/>} />} />
      </Routes>
    </BrowserRouter> */} 


  </>
}
