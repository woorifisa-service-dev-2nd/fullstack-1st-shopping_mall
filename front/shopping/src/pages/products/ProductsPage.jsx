import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import DefaultLayout from "../../layouts/DefaultLayouts";
import { findAllProducts } from "../../apis/ProductAPI";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    findAllProducts().then((data) => {
      setProducts(data);
      setCheckedList(new Array(data.length).fill(false));
    });
  }, []);

  const [orderList, setOrderList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

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
    } else {
      setOrderList((prevOrderList) =>
        prevOrderList.filter((order) => order.id !== product.id)
      ); // 새로운 상태를 설정합니다.
    }
  };

  const getChekedStyle = (idx) => {
    return checkedList[idx] ? "bg-blue-200 border-blue-200" : "bg-white";
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center w-full h-full gap-4">
        <div className="text-6xl">쇼핑 상품 조회</div>
        <div className="border-solid border-2 w-full border-[#e0e0e0]"></div>
        <div className="text-2xl">상품을 선택해주세요</div>

        <div className="flex flex-col gap-2 items-start">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`flex items-center justify-between ${getChekedStyle(
                idx
              )} p-2 rounded-md w-72 cursor-pointer border-2 hover:border-blue-200`}
              onClick={() => {
                const newCheckedList = checkedList.map((checked, index) =>
                  index === idx ? !checked : checked
                );
                setCheckedList(newCheckedList);
                checkOrderHandler(product, newCheckedList[idx]);
              }}
            >
              <div className="flex">
                <div>상품명: </div>
                <div>{product.productName}</div>
              </div>
              <div className="flex">
                <div>가격: </div>
                <div>{product.price}원</div>
              </div>
            </div>
          ))}
        </div>
        <p className="">
          주문 상품: {orderList.map((order) => order.productName).join(", ")}
        </p>
        {orderList.length > 0 ? (
          <>
            <div
              onClick={gotoOrder}
              className="bg-blue-200 text-white text-center p-2 rounded-md hover:bg-blue-500 cursor-pointer w-40"
            >
              주문하기
            </div>
          </>
        ) : (
          <div className="bg-blue-200 text-white text-center p-2 rounded-md w-40">
            주문하기
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
