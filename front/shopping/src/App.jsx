import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import OrderPage from "./pages/order/Order";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="order" element={<OrderPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
