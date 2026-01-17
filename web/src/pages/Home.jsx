import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🧵 TapisKu Lampung</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: 16 }}>
            <img src={p.image} width="100%" />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
    </div>
  );
}