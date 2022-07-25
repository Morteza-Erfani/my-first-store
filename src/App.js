import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";

// Component
import Store from "./component/Store";
import ProductDetails from "./component/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
