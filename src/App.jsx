import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

import ProductsList from "./components/productsList/ProductsList";
import ProductItem from "./components/productItem/ProductItem";
import "./App.css";

function App() {
  const { data: products } = useFetch("http://localhost:8000/products");

  return (
    <>
      <Routes>
        <Route path="/" element={products && <ProductsList products={products} />} />
        <Route path="/:id" element={<ProductItem />} />
      </Routes>
    </>
  );
}

export default App;
