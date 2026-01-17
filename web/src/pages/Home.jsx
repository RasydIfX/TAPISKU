import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Cari tapis Lampung..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="grid">
          {filteredProducts.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.name} className="image" />

              <div className="card-body">
                <div className="name">{p.name}</div>
                <div className="price">
                  Rp {p.price.toLocaleString("id-ID")}
                </div>

                <button
                  className="button"
                  onClick={() => addToCart(p)}
                >
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}