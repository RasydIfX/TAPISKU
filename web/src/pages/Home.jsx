import { products } from "../data/products";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>TapisKu Lampung</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", borderRadius: 8 }}
            />

            <h3>{p.name}</h3>
            <p>
              Rp {p.price.toLocaleString("id-ID")}
            </p>

            <button style={{ padding: 8, width: "100%" }}>
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}