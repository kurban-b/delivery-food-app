import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverySelector } from "../../redux/selectors/application";
import { addressSelector } from "../../redux/selectors/products";
import {
  changeAddressHouse,
  changeAddressStreet,
} from "../../redux/actions/products";

function FormAddress() {
  const dispatch = useDispatch();
  const address = useSelector(addressSelector);
  const delivery = useSelector(deliverySelector);

  const handleChangeStreet = (event) => {
    dispatch(changeAddressStreet(event.target.value));
  };

  const handleChangeHouse = (event) => {
    dispatch(changeAddressHouse(event.target.value));
  };

  if (!delivery) {
    return (
      <div className={"form-address"}>
        <h2 className={"title"}>Наш адрес</h2>
        <div className={"address"}>
          <div className={"address-subtitle"}>
            г. Москва, ул.Крутая, дом № 777
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={"form-address"}>
      <h2 className={"title"}>Доставка г. Москва</h2>
      <div className={"address"}>
        <div className={"address-street"}>
          <div className={"address-subtitle"}>Улица</div>
          <div>
            <input
              type="text"
              placeholder={"Введите название улицы"}
              value={address.street}
              onChange={handleChangeStreet}
            />
          </div>
        </div>
        <div className={"address-house"}>
          <div className={"address-subtitle"}>Дом</div>
          <div>
            <input
              type="text"
              placeholder={"Введите номер дома"}
              value={address.house}
              onChange={handleChangeHouse}
            />
          </div>
        </div>
        {address.error && (
          <div className={"address-error"}>
            <div className={"arrow"} />
            <div className={"block"}>
              Нужно заполнить для оформления доставки
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormAddress;
