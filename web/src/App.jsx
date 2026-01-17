import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar current={page} setCurrent={setPage} />

      {page === "home" && <Home />}
      {page === "library" && <Library />}
      {page === "contact" && <Contact />}
    </>
  );
}
