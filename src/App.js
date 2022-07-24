import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";

// Component
import Store from "./component/Store";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
