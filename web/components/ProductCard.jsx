export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>Rp {product.price.toLocaleString()}</p>
      <a href={`/detail/${product.id}`} className="btn">
        Lihat Detail
      </a>
    </div>
  );
}