import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="navbar">
      <div className="logo">🧵 TapisKu</div>

      <div className="cart-icon">
        🛒
        {cart.length > 0 && (
          <span className="cart-badge">{cart.length}</span>
        )}
      </div>
    </div>
  );
}