// IMPORTS
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

// COMPONENTS
import ProductsList from "./components/productsList/ProductsList";
import ProductItem from "./components/productItem/ProductItem";
import Navbar from "./components/navbar/Navbar";

// STYLE SHEETS
import "./App.css";

function App() {
  const { data: products } = useFetch("http://localhost:8000/products");

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={products && <ProductsList products={products} />}
        />
        <Route path="/:id" element={<ProductItem />} />
      </Routes>
    </>
  );
}

export default App;
