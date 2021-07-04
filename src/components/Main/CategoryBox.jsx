import React from "react";
import Products from "./Products";
import PropTypes from "prop-types";

function CategoryBox({ category, index }) {
  return (
    <div className={"category-box"} id={`section${category.id}`}>
      <div className={index % 2 === 0 ? "edd" : "odd"}>
        <div className={"cont"}>
          <h3 className={"title"}>{category.name}</h3>
          <div>
            <Products categoryIdArray={category.products} />
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryBox.propTypes = {
  category: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CategoryBox;
