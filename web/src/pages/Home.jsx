import { useState } from "react";
import { products } from "../data/products";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="header">🧵 Tapis Lampung</h1>

      {/* SEARCH */}
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Cari tapis Lampung..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* PRODUK */}
      <div className="grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} className="image" />

            <div className="card-body">
              <div className="name">{p.name}</div>
              <div className="price">
                Rp {p.price.toLocaleString("id-ID")}
              </div>

              <button className="button">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}