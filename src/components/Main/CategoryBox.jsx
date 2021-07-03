import React from "react";
import Products from "./Products";

function CategoryBox({ category, index }) {
  return (
    <div className={"category-box"} id={`section${category.id}`}>
      <div className={index % 2 === 0 ? "edd" : "odd"}>
        <h3 className={"title"}>{category.name}</h3>
        <div>
          <Products categoryIdArray={category.products} />
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
