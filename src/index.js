import ReactDOM from "react-dom/client";
import CartProvider from "./store/CartProvider";

import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderForm from "./components/Order/OrderForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="form" element={<OrderForm />} />
      </Routes>
    </Router>
  </CartProvider>
);
