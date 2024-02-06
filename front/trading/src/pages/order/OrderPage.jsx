import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function OrderPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedItems } = location.state;

    const [order, setOrder] = useState([]);

    useEffect(() => {
        setOrder(selectedItems.map((item) => ({
            name: item,
            quantity: 1,
            price: 1000,    // 가정: 모든 상품의 가격이 1000원이라고 가정하였습니다.
        })));
    }, [selectedItems]);

    const handleChange = (event, itemName) => {
        const updatedOrder = order.map((item) => (item.name === itemName ? { ...item, quantity: event.target.value } : item));
        setOrder(updatedOrder);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(order);
    };

    const handleCancel = () => {
        navigate('/products');
    };

    const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">주문</h1>
                {order.map((item, index) => (
                    <div key={index} className="border p-4 rounded shadow space-y-2">
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <label className="block">
                            <span className="text-gray-700">수량:</span>
                            <input type="number" name="quantity" value={item.quantity} onChange={(event) => handleChange(event, item.name)} className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                {/* {[...Array(10).keys()].map((num) => <option key={num + 1} value={num + 1}>{num + 1}</option>)} */}
                            </input>
                        </label>
                        <label className="block">
                            <span className="text-gray-700">금액: {item.price * item.quantity}</span>
                        </label>
                    </div>
                ))}
                <div>
                    <h2 className="text-2xl font-semibold">Total Price : {total}</h2>
                </div>
            </div>
            <div className="flex space-x-4">
                <button type="submit" className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    주문
                </button>
                <button type="button" onClick={handleCancel} className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                    취소
                </button>
            </div>
        </form>
    );
}