import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import DefaultLayout from "../../layouts/DefaultLayouts";

export default function ProductsPage() {
  // 하드코딩된 상품 목록 데이터
  const [products, setProducts] = useState([
    { id: 1, name: "티셔츠", price: 20000 },
    { id: 2, name: "청바지", price: 40000 },
    { id: 3, name: "운동화", price: 60000 },
    { id: 4, name: "가방", price: 30000 },
  ]);

  const [orderList, setOrderList] = useState([]);
  const [checkedList, setCheckedList] = useState(
    products.map((product) => false)
  );
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });


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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductList = [
      ...products,
      { id: products.length + 1, name: newProduct.name, price: newProduct.price }
    ];
    setProducts(newProductList);
    console.log(orderList);

    setNewProduct({ name: "", price: "" });
    setShowAddForm(false);
  };

  const deleteAllProducts = () => {
    setProducts([]);
  }

  const deleteSelectedProducts = () => {
    const updatedProducts = products.filter((product, idx) => !checkedList[idx]);

    setOrderList([]);
    setCheckedList(products.map(() => false));

    setProducts(updatedProducts);
  };

  const getChekedStyle = (idx) => {
    return checkedList[idx] ? "bg-blue-200" : "bg-white";
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
              )} p-2 rounded-md w-72 border-solid
              hover:bg-blue-100 hover:border-blue-300 cursor-pointer`}
              onClick={() => {
                const newCheckedList = [...checkedList];
                newCheckedList[idx] = !newCheckedList[idx];
                setCheckedList(newCheckedList);
                checkOrderHandler(product, newCheckedList[idx]);
              }}
            >
              <div className="flex" >
                <div>상품명: </div>
                <div>{product.name}</div>
              </div>
              <div className="flex">
                <div>가격: </div>
                <div>{product.price}원</div>
              </div>
            </div>
          ))}
        </div>
        <p className="">
          주문 상품: {orderList.map((order) => order.name).join(", ")}
        </p>
        {orderList.length > 0 ? (
          <>
            <div
              onClick={gotoOrder}
              className="bg-blue-200 text-white text-center p-2 rounded-md hover:bg-blue-500 cursor-pointer w-40"
            >
              주문하기
            </div>
            <div
              onClick={deleteSelectedProducts}
              className="bg-red-200 text-white text-center p-2 rounded-md hover:bg-red-500 cursor-pointer w-40"
            >
              선택 상품 삭제
            </div>
          </>
        ) : (
          <div className="bg-blue-200 text-white text-center p-2 rounded-md w-40">
            주문하기
          </div>
        )}
        <div
          onClick={deleteAllProducts}
          className="bg-red-200 text-white text-center p-2 rounded-md hover:bg-red-500 cursor-pointer w-40">
          전체 삭제
        </div>
        <button
          className="bg-blue-200 text-white text-center p-2 rounded-md hover:bg-blue-500 cursor-pointer w-40"
          onClick={() => setShowAddForm(true)}
        >
          상품 추가하기
        </button>
      </div >
      {showAddForm && (
        <div className="flex flex-col items-center w-full h-full gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center"

          >
            <input
              type="text"
              name="name"
              placeholder="상품명"
              value={newProduct.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md w-1/4 px-4 py-2"
            />
            <input
              type="text"
              name="price"
              placeholder="가격"
              value={newProduct.price}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md w-1/4 px-4 py-2"
            />
            <button type="submit"
              className="bg-blue-200 text-white text-center p-2 rounded-md hover:bg-blue-500 cursor-pointer"
            >등록</button>
          </form>
        </div>
      )}
    </DefaultLayout >
  );
}
