import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import CartBox from "./pages/CartBox";
import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartBox />} />
      </Route>
    </Routes>
  );
}

export default App;
