import { useEffect, useState } from "react";
import { getHistory } from "../services/api";

export default function History() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getHistory().then(setOrders);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📜 Riwayat Pesanan</h1>

      {orders.map((o) => (
        <div key={o.id} style={{ border: "1px solid #ddd", padding: 16, marginBottom: 12 }}>
          <h3>{o.id}</h3>
          <p>{o.date}</p>
          <p>Status: {o.status}</p>
          <p>Total: {o.total}</p>

          <ul>
            {o.items.map((i) => (
              <li key={i.id}>
                {i.name} ({i.qty}x)
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}