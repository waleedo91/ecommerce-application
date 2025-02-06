// IMPORTS
import { Link } from "react-router-dom";

// STYLE SHEETS
import "./ProductList.css";

function ProductsList({ products }) {
  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <img className="list-image" src={product.img} alt={product.name} />
            <p>${product.price}</p>
            <Link className="link-product" to={`/${product.id}`}>
              View Item
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
