import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../redux/selectors/products";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

function Products({ categoryIdArray }) {
  const products = useSelector(productsSelector);

  return (
    <div className={"products"}>
      {products
        .filter((product) => {
          return categoryIdArray.some((id) => product.id === id);
        })
        .map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
}

Products.propTypes = {
  categoryIdArray: PropTypes.array.isRequired,
};

export default Products;
