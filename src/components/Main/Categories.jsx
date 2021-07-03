import React from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../redux/selectors/categories";
import CategoryBox from "./CategoryBox";

function Categories() {
  const categories = useSelector(categoriesSelector).filter(
    (item) => item.products.length > 0
  );

  return (
    <div className={"categories"}>
      {categories.map((category, index) => {
        return (
          <CategoryBox
            key={category.id}
            category={category}
            index={index + 1}
          />
        );
      })}
    </div>
  );
}

export default Categories;
