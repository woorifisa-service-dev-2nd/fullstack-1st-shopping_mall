import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Products from './pages/products/Products'
import './App.css'
import Order from './pages/order/Order'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </Router>
    </>

  )
}

export default App
