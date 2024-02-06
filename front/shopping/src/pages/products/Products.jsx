import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

export default function Products() {
  // 하드코딩된 상품 목록 데이터
  const products = [
    { id: 1, name: "티셔츠", price: 20000 },
    { id: 2, name: "청바지", price: 40000 },
    { id: 3, name: "운동화", price: 60000 },
    { id: 4, name: "가방", price: 30000 },
  ];

  const [orderList, setOrderList] = useState([]);

  const navigate = useNavigate();

  const gotoOrder = () => {
    if (orderList.length === 0) {
      return;
    }
    navigate("/order", { state: { orderList: orderList } });
  };

  const checkOrderHandler = (product, isChecked) => {
    if (isChecked) {
      setOrderList((prevOrderList) => [...prevOrderList, product]);
      console.log(orderList);
    } else {
      setOrderList((prevOrderList) =>
        prevOrderList.filter((order) => order.id !== product.id)
      ); // 새로운 상태를 설정합니다.
      console.log(orderList);
    }
  };

  return (
    <div>
      <h1>쇼핑 상품 조회</h1>
      <ul className="list-none">
        {/* 상품 목록을 매핑하여 각 상품을 리스트 아이템으로 렌더링 */}
        {products.map((product) => (
          <li key={product.id}>
            <input
              type="checkbox"
              id={`product-${product.id}`}
              onChange={(e) => checkOrderHandler(product, e.target.checked)}
            />
            <label htmlFor={`product-${product.id}`}>
              <span>{product.name}</span>
              <span>{product.price}원</span>
            </label>
          </li>
        ))}
      </ul>

      <button onClick={gotoOrder}>주문하기</button>
    </div>
  );
}
