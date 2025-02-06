// IMPORTS
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// STYLE SHEETS
import "./ProductItem.css";

function ProductItem() {
  const { id } = useParams();
  const { data: product, isLoading } = useFetch(
    "http://localhost:8000/products/" + id
  );
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {product && (
        <div className="item-content">
          <div className="name-image">
            <h3 className="product-title">{product.name}</h3>
            <img
              src={product.img}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="price-description">
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <div className="button-container">
              <button className="add-button">Add to Cart!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
