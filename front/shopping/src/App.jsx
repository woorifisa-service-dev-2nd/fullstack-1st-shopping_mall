import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import OrderPage from "./pages/order/OrderPage";
import OrderListPage from "./pages/order/OrderListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/orderList" element={<OrderListPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
