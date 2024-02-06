import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import OrderPage from "./pages/order/OrderPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;