const API_URL = "http://10.0.2.2:3000";

// =======================
// LOGIN
// =======================
export const login = async (
  email: string,
  password: string
) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login gagal");
  }

  return res.json();
};

// =======================
// REGISTER
// =======================
export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Register gagal");
  }

  return res.json();
};