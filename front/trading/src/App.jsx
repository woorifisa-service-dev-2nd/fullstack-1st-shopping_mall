import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import OrderPage from './pages/order/OrderPage'
import CheckBox from './pages/products/CheckBox'
import './App.css'
import React, { createContext } from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/products" element={<CheckBox />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </>

  )
}

export default App