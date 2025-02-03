import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./ProductItem.css";

function ProductItem() {
  const { id } = useParams();
  const { data: blog } = useFetch("http://localhost:8000/products/" + id);
  return (
    <div>
      {blog && (
        <div className="item-content">
          <div className="name-image">
            <h3>{blog.name}</h3>
            <img src={blog.img} alt={blog.name} />
          </div>
          <div className="price-description">
            <p>{blog.description}</p>
            <p>${blog.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
