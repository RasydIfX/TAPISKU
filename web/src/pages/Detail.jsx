import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function Detail() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);

  return (
    <div className="container">
      <img src={product.image} className="detail-img" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Rp {product.price.toLocaleString()}</h3>

      <button className="btn">Tambah ke Keranjang</button>
    </div>
  );
}