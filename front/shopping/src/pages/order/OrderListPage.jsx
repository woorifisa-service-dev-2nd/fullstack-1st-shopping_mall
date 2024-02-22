import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayouts";
import { findAllOrders } from "../../apis/OrderAPI";

export default function OrderListPage() {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    findAllOrders().then((data) => {
      setOrderList(data);
    });
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center w-full h-full gap-4">
        <div className="text-6xl">주문 목록</div>
        <div className="border-solid border-2 w-full border-[#e0e0e0]"></div>
        <div className="text-2xl">주문 목록을 조회합니다</div>
        <div className="flex flex-col gap-2 items-start">
          {orderList.map((inventory) => (
            <div
              key={inventory.id}
              className="flex items-center justify-between p-2 rounded-md w-72 cursor-pointer border-2 hover:border-blue-200"
              onClick={() => {
                navigate("/order", {
                  state: { orderList: inventory.products },
                });
              }}
            >
              <div className="text-lg">{inventory.name}</div>
              <div className="text-lg">{inventory.products.length}개</div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
