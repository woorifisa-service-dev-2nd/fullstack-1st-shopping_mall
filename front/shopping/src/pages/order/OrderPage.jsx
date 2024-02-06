import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayouts";

export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedItems = location.state ? location.state.orderList : [];

  const [order, setOrder] = useState([]);

  useEffect(() => {
    console.log(selectedItems);
    if (selectedItems && selectedItems.length > 0) {
      setOrder(
        selectedItems.map((item) => ({
          name: item.name,
          quantity: 1,
          price: item.price,
        }))
      );
    }
  }, [selectedItems]);

  const handleChange = (event, itemName) => {
    const updatedOrder = order.map((item) =>
      item.name === itemName ? { ...item, quantity: event.target.value } : item
    );
    setOrder(updatedOrder);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(order);
  };

  const handleCancel = () => {
    navigate("/");
  };

  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <DefaultLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full h-full gap-4"
      >
        <h1 className="text-6xl">주문</h1>
        <div className="border-solid border-2 w-full border-[#e0e0e0]"></div>
        {order.map((item, index) => (
          <div key={index} className="border p-4 rounded shadow my-3 w-80">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <label className="block">
              <span className="text-gray-700">수량:</span>
              <input
                type="number"
                name="quantity"
                min={0}
                value={item.quantity}
                onChange={(event) => handleChange(event, item.name)}
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">
                금액: {item.price * item.quantity}
              </span>
            </label>
          </div>
        ))}
        <div>
          <h2 className="text-2xl font-semibold">Total Price : {total}</h2>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            주문
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            취소
          </button>
        </div>
      </form>
    </DefaultLayout>
  );
}
