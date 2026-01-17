export default function Navbar({ current, setCurrent }) {
  return (
    <nav className="topnav">
      <span
        className={current === "home" ? "active" : ""}
        onClick={() => setCurrent("home")}
      >
        Home
      </span>

      <span
        className={current === "library" ? "active" : ""}
        onClick={() => setCurrent("library")}
      >
        Library
      </span>

      <span
        className={current === "contact" ? "active" : ""}
        onClick={() => setCurrent("contact")}
      >
        Contact
      </span>
    </nav>
  );
}