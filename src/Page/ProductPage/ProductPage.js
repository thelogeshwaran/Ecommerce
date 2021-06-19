import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import Filter from "../../Components/Filters/Filter";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div className="productContent">
      <div className="filter">
        <Filter />
      </div>
      <div className="products">
        <ProductList />
      </div>
    </div>
  );
}

export default ProductPage;
