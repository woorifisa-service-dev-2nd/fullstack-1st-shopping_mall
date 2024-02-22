const BASE_URL = import.meta.env.VITE_BASE_URL;

export const findAllOrders = async () => {
  const response = await fetch(`${BASE_URL}/api/inventories`);
  return response.json();
};

export const createOrder = async (inventoryList) => {
  const response = await fetch(`${BASE_URL}/api/inventories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inventoryList),
  });
  return response;
};
