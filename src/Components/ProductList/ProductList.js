import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
import { useProductProvider } from "../../Context/ProductContext";

function ProductList() {
  const { finalData } = useProductProvider();
  return (
    <div className="productList">
      {finalData &&
        finalData.map((data) => (
          <div>
            <Product data={data} />
          </div>
        ))}
    </div>
  );
}

export default ProductList;
