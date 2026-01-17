const API_URL = "http://127.0.0.1:3658/m1/1178355-1172455-default/products";

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const getHistory = async () => {
  const res = await fetch(`${API_URL}/history`);
  return res.json();
};

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};