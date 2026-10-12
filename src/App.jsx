

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Services, { ServiceDetail, ServicesOverview } from './Pages/Services'
import Contact from './Pages/Contact'
import ProductDetails from './Pages/ProductDetails'
import ProductCart from './Pages/ProductCart'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/services' element={<Services/>}>
          <Route index element={<ServicesOverview/>}/>
          <Route path=':serviceId' element={<ServiceDetail/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product-details/:id/:category' element={<ProductDetails/>}/>
        <Route path='/product-cart' element={<ProductCart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
