import React from "react";
import Basket_icon from "../../assets/icons/Basket.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addressSelector,
  basketArrPricesSelector,
  basketSelector,
  loadingAddOrderSelector,
} from "../../redux/selectors/products";
import { addOrder, addressError } from "../../redux/actions/products";
import ReactLoading from "react-loading";

function Basket() {
  const dispatch = useDispatch();

  const loadingAddOrder = useSelector(loadingAddOrderSelector);
  const basket = useSelector(basketSelector);
  const address = useSelector(addressSelector);
  const pricesArr = useSelector(basketArrPricesSelector);
  let sum =
    pricesArr.length > 0 ? pricesArr.reduce((sum, price) => sum + price) : 0;

  const handleAddOrder = () => {
    if (basket.length === 0) {
      return null;
    }
    if (address.street === "" || address.house === "") {
      dispatch(addressError());
      return;
    }
    dispatch(addOrder(sum, address, basket));
  };

  if (loadingAddOrder) {
    return (
      <button className={"basket"} onClick={handleAddOrder}>
        <ReactLoading type={"spin"} />
      </button>
    );
  }

  return (
    <button className={"basket"} onClick={handleAddOrder}>
      <div className={"value"}>{sum} ₽</div>
      <div className={"icon"}>
        <img src={Basket_icon} alt="basket" />
      </div>
    </button>
  );
}

export default Basket;
