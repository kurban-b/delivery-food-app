import React from "react";
import Product from "../../assets/Burger.png";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "../../assets/icons/add.svg";
import {
  categoryHitsSelector,
  categoryNewsSelector,
} from "../../redux/selectors/categories";
import {
  addProductByBasket,
  deleteProductFromBasket,
} from "../../redux/actions/products";
import { basketSelector } from "../../redux/selectors/products";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const hits = useSelector(categoryHitsSelector);
  const news = useSelector(categoryNewsSelector);
  const basket = useSelector(basketSelector);

  let hasProductByPasket =
    basket && basket.some((item) => item.id === product.id);

  const handleAddProductByBasket = () => {
    dispatch(addProductByBasket(product));
  };

  const handleDeleteProductFromBasket = () => {
    dispatch(deleteProductFromBasket(product));
  };

  return (
    <div className={"productCard"}>
      <div className="img">
        {hits.products.some((id) => id === product.id) && (
          <div className="badge hit">Хит</div>
        )}
        {news.products.some((id) => id === product.id) && (
          <div className="badge new">Новое</div>
        )}
        <img src={Product} alt="" />
        {hasProductByPasket ? (
          <div className={"counter"}>
            <button className={"btn"} onClick={handleDeleteProductFromBasket}>
              -
            </button>
            <div className={"sum"}>
              {basket.filter(item => item.id === product.id).length}
            </div>
            <button className={"btn"} onClick={handleAddProductByBasket}>
              +
            </button>
          </div>
        ) : (
          <button className={"button"} onClick={handleAddProductByBasket}>
            <img src={AddIcon} alt="" />
          </button>
        )}
      </div>
      <div className={"name"}>{product.name}</div>
      <div className="price">{product.price} ₽</div>
    </div>
  );
}

export default ProductCard;
