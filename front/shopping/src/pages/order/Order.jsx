import { Route, Routes, useLocation } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayouts";

export default function Order() {
  const location = useLocation();
  const orderList = location.state ? location.state.orderList : [];
  console.log(orderList);
  return (
    <DefaultLayout>
      <div>
        <h2>주문 목록</h2>
        <ul>
          {orderList.map((product) => (
            <li key={product.id}>
              <span>ID: {product.id}</span>
              <span>Name: {product.name}</span>
              <span>Price: {product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
}
