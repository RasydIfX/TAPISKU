import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2>🛒 Keranjang masih kosong</h2>;
  }

  return (
    <div className="container">
      <h2>Keranjang Belanja</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} width={80} />
          <div>
            <h4>{item.name}</h4>
            <p>Rp {item.price.toLocaleString("id-ID")}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              Hapus
            </button>
          </div>
        </div>
      ))}

      <h3>Total: Rp {total.toLocaleString("id-ID")}</h3>

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}