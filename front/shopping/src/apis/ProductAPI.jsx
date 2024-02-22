const BASE_URL = import.meta.env.VITE_BASE_URL;

export const findAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/api/products`);
  return response.json();
};

export const findByNmaeLike = async (name) => {
  const response = await fetch(`${BASE_URL}/api/products?${name}`);
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response;
};

export const deleteProduct = async (productId) => {
  const response = await fetch(`${BASE_URL}/api/products/${productId}`);
  return response;
};
